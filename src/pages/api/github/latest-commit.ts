import { getLatestCommits } from '@/lib/github';
import type { NextApiRequest, NextApiResponse } from 'next'

interface LatestCommit {
    name: string;
    url: string;
    description: string;
    updated_at: string;
}


export default async function handler(_: NextApiRequest, res: NextApiResponse<LatestCommit>) {
    const response = await getLatestCommits();
    const { name, html_url, description, updated_at } = response[0];

    return res.status(200).json({ name, url: html_url, description, updated_at });
}