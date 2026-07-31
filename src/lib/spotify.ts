const TOKEN_URL = "https://accounts.spotify.com/api/token";
const CURRENTLY_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL =
	"https://api.spotify.com/v1/me/player/recently-played?limit=1";

export interface NowPlaying {
	id: string;
	title: string;
	artist: string;
	isPlaying: boolean;
	albumArt: string | null;
	url: string;
}

interface SpotifyTrack {
	id: string;
	name: string;
	artists: { name: string }[];
	album?: { images?: { url: string; width: number; height: number }[] };
	external_urls?: { spotify?: string };
}

function toNowPlaying(track: SpotifyTrack, isPlaying: boolean): NowPlaying {
	const images = track.album?.images ?? [];
	return {
		id: track.id,
		title: track.name,
		artist: track.artists.map((artist) => artist.name).join(", "),
		isPlaying,
		albumArt: images[images.length - 1]?.url ?? images[0]?.url ?? null,
		url: track.external_urls?.spotify ?? `https://open.spotify.com/track/${track.id}`,
	};
}

async function getAccessToken(): Promise<string | null> {
	const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
	const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) return null;

	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
	});

	if (!res.ok) return null;

	const data = await res.json();
	return data.access_token ?? null;
}

async function getCurrentlyPlaying(accessToken: string): Promise<NowPlaying | null> {
	const res = await fetch(CURRENTLY_PLAYING_URL, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	if (res.status === 204 || !res.ok) return null;

	const data = await res.json();
	if (!data.item) return null;

	return toNowPlaying(data.item, Boolean(data.is_playing));
}

async function getRecentlyPlayed(accessToken: string): Promise<NowPlaying | null> {
	const res = await fetch(RECENTLY_PLAYED_URL, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	if (!res.ok) return null;

	const data = await res.json();
	const track = data.items?.[0]?.track;
	if (!track) return null;

	return toNowPlaying(track, false);
}

export async function getLastPlayed(): Promise<NowPlaying | null> {
	try {
		const accessToken = await getAccessToken();
		if (!accessToken) return null;

		const current = await getCurrentlyPlaying(accessToken);
		if (current?.isPlaying) return current;

		return await getRecentlyPlayed(accessToken);
	} catch {
		return null;
	}
}
