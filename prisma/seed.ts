/* eslint-disable @typescript-eslint/no-misused-promises */
import { Prisma } from '@prisma/client'
import { prisma } from '../src/server/db/client'

const prodData: Prisma.ProductCreateInput[] = [
    {
        currency: 'EUR',
        price_id: Math.random().toString(),
        sku_id: Math.random().toString(),
        sku: Math.random().toString(),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: Math.random().toString(),
        material: 'cotone',
        price: 20,
        misure: 'csdcsdcsdcsdc',
        quantity: 2,
    },
    {
        currency: 'EUR',
        price_id: Math.random().toString(),
        sku_id: Math.random().toString(),
        sku: Math.random().toString(),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: Math.random().toString(),
        material: 'cotone',
        price: 6,
        misure: 'csdcsdcsdcsdc',
        quantity: 2,
    },
    {
        currency: 'EUR',
        price_id: Math.random().toString(),
        sku_id: Math.random().toString(),
        sku: Math.random().toString(),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        misure: 'csdcsdcsdcsdc',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: Math.random().toString(),
        material: 'cotone',
        price: 15,
        quantity: 1,
    },
]

async function main() {
    console.log('Start seeding ...')
    //await prisma.product.deleteMany()
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
