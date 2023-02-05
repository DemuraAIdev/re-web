import { getAnalytics } from "@/lib/umami";
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Analytics {
    pageviews: {
        value: number;
        change: number;
    };
    uniques: {
        value: number;
        change: number;
    };
    bounces: {
        value: number;
        change: number;
    };
    totaltime: {
        value: number;
        change: number;
    };
}

export default async function handler(_: NextApiRequest, res: NextApiResponse<Analytics>) {
    const response = await getAnalytics();
    const data = await response.json();

    const pageviews = data.pageviews;
    const uniques = data.uniques;
    const bounces = data.bounces;
    const totaltime = data.totaltime;

    return res.status(200).json({
        pageviews,
        uniques,
        bounces,
        totaltime,
    });
}