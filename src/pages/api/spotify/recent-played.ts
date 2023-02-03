import { getRecentPlayed } from "@/lib/spotify";
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Recend {
    tracks: {
        artist: string;
        songUrl: string;
        title: string;
    }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse<Recend>) {
    const response = await getRecentPlayed();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map(({ track }: { track: any }) => ({
        artist: track.artists.map((_artist: { name: any; }) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return res.status(200).json({ tracks });
}