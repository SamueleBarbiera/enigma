/* eslint-disable @typescript-eslint/no-misused-promises */
import { Prisma } from '@prisma/client'
import { prisma } from '../src/server/db/client'

const prodData: Prisma.ProductCreateInput[] = [
    {
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: '',
        name: 'vestito 1',
        material: 'cotone',
        price: 20,
        quantity: 2,
    },
    {
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: '',
        name: 'vestito 2',
        material: 'cotone',
        price: 6,
        quantity: 3,
    },
    {
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: '',
        name: 'vestito 3',
        material: 'cotone',
        price: 15,
        quantity: 1,
    },
]

async function main() {
    console.log('Start seeding ...')
    // await prisma.product.deleteMany({})
    const products = await prisma.product.createMany({
        data: prodData,
    })
    console.log('🚀 ~ file: seed.ts ~ line 44 ~ main ~ products', products)
    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
