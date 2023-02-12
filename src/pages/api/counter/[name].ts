import type { NextApiRequest, NextApiResponse } from "next";
import { getNum, setNum } from "@/lib/Counter";
import getCountImage from "@/lib/utils/themify";

const PLACES = 7

interface ExtendedNextApiRequest extends NextApiRequest {
    query: {
        name: string
        theme?: string
    }
}


export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<string>) {
    const { name } = req.query;
    const { theme = 'moebooru' } = req.query
    let length = PLACES

    // set headers and content type
    res.setHeader("Cache-Control", "max-age=0, no-cache, no-store, must-revalidate");
    res.setHeader("Content-Type", "image/svg+xml");

    const data = await getCountByName(name)

    if (name === 'demo') {
        res.setHeader(
            'cache-control', 'max-age=31536000'
        )
        length = 10
    }
    // @ts-ignore
    console.log("data: ", data)
    const renderSvg = getCountImage({ count: data.number, theme, length })

    // send response image
    res.status(200).send(await renderSvg);

}

async function getCountByName(name: string) {
    const defaultCount = { name, number: 0 }

    if (name === 'demo') return { name, number: '0123456789' }

    try {
        const counter = await getNum(name) || defaultCount
        const num = counter.number + 1
        setNum(counter.name, num)
        return counter

    } catch (error) {
        console.log("get count by name is error: ", error)
        return defaultCount

    }
}