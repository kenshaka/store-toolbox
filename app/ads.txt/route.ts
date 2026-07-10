const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID?.trim();

function getPublisherId(clientId: string) {
  return clientId.replace(/^ca-/, "");
}

export function GET() {
  if (!adsenseClientId || !/^ca-pub-\d{16}$/.test(adsenseClientId)) {
    return new Response("ads.txt is not configured yet.\n", {
      status: 404,
      headers: {
        "cache-control": "no-store",
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  return new Response(
    `google.com, ${getPublisherId(adsenseClientId)}, DIRECT, f08c47fec0942fa0\n`,
    {
      headers: {
        "cache-control": "public, max-age=3600",
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
