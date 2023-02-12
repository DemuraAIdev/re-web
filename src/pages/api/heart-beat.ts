import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    // set cache control header
    res.setHeader("Cache-Control", "max-age=0, no-cache, no-store, must-revalidate");

    // send response alive
    res.status(200).json({ alive: true });
}