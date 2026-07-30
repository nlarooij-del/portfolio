import http from "node:http";
import { exec } from "node:child_process";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPE = "user-read-recently-played";

if (!CLIENT_ID || !CLIENT_SECRET) {
	console.error(
		"Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET env vars before running this script.",
	);
	process.exit(1);
}

const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("scope", SCOPE);

const server = http.createServer(async (req, res) => {
	const url = new URL(req.url, REDIRECT_URI);
	if (url.pathname !== "/callback") {
		res.writeHead(404);
		res.end();
		return;
	}

	const code = url.searchParams.get("code");
	if (!code) {
		res.writeHead(400);
		res.end("Missing code");
		return;
	}

	const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
		},
		body: new URLSearchParams({
			grant_type: "authorization_code",
			code,
			redirect_uri: REDIRECT_URI,
		}),
	});

	const data = await tokenRes.json();

	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Authorized! You can close this tab and check your terminal.");

	if (data.refresh_token) {
		console.log("\nAdd this to your .env file:\n");
		console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
	} else {
		console.error("\nNo refresh token returned:", data);
	}

	server.close();
	process.exit(0);
});

server.listen(8888, () => {
	console.log(`Open this URL in your browser to authorize:\n\n${authUrl.toString()}\n`);
	exec(`open "${authUrl.toString()}"`);
});
