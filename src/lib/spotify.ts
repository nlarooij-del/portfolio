const TOKEN_URL = "https://accounts.spotify.com/api/token";
const RECENTLY_PLAYED_URL =
	"https://api.spotify.com/v1/me/player/recently-played?limit=1";

export interface NowPlaying {
	title: string;
	artist: string;
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

export async function getLastPlayed(): Promise<NowPlaying | null> {
	try {
		const accessToken = await getAccessToken();
		if (!accessToken) return null;

		const res = await fetch(RECENTLY_PLAYED_URL, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		if (!res.ok) return null;

		const data = await res.json();
		const track = data.items?.[0]?.track;
		if (!track) return null;

		return {
			title: track.name,
			artist: track.artists
				.map((artist: { name: string }) => artist.name)
				.join(", "),
		};
	} catch {
		return null;
	}
}
