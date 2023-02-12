import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import mimeType from 'mime-types';

const root = process.cwd()

const themePath = path.resolve(root, 'src', 'lib', 'utils', 'theme');
const themeList: { [key: string]: { [key: string]: { width: number, height: number, data: string } } } = {}

fs.readdirSync(themePath).forEach(theme => {
    if (!(theme in themeList)) themeList[theme] = {}
    const imgList = fs.readdirSync(path.resolve(themePath, theme))
    imgList.forEach(img => {
        const imgPath = path.resolve(themePath, theme, img)
        const name = path.parse(img).name
        const { width, height } = sizeOf(imgPath)


        themeList[theme][name] = {
            // @ts-ignore
            width,
            // @ts-ignore
            height,
            data: convertToDatauri(imgPath)
        }
    })
})

function convertToDatauri(path: string) {
    const mime = mimeType.lookup(path)
    const base64 = fs.readFileSync(path).toString('base64')

    return `data:${mime};base64,${base64}`
}

async function getCountImage({ count, theme = 'moebooru', length = 7 }: { count: string | number, theme: string | string, length?: number }) {
    if (!(theme in themeList)) theme = 'moebooru'

    // This is not the greatest way for generating an SVG but it'll do for now
    const countArray = count.toString().padStart(length, '0').split('')

    let x = 0, y = 0
    const parts = countArray.reduce((acc, next, index) => {
        const { width, height, data } = themeList[theme][next]

        const image = `${acc}
      <image x="${x}" y="0" width="${width}" height="${height}" xlink:href="${data}" />`

        x += width

        if (height > y) y = height

        return image
    }, '')

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Moe Count</title>
    <g>
      ${parts}
    </g>
</svg>
`
}

export default getCountImage
