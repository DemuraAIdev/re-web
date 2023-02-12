import prisma from "./prisma";


export async function getNum(name: string): Promise<{ name: string, number: number }> {
    // get number by name using findUnique
    const num = await prisma.tbcount.findUnique({
        where: {
            name: name
        }
    });

    // if number is not found, create it
    if (!num) {
        const newNum = await prisma.tbcount.create({
            data: {
                name: name,
                number: 0
            }
        });
        return newNum;
    }
    return num;

}

export function getAll(): Promise<{ name: string, num: number }[]> {
    return prisma.$queryRaw`SELECT * FROM tbcount`;
}

export async function setNum(name: string, value: number) {
    const num = await prisma.tbcount.update({
        where: {
            name: name
        },
        data: {
            number: value
        }
    });
    return num;


}