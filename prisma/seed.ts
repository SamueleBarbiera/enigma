/* eslint-disable @typescript-eslint/no-misused-promises */
import { Prisma } from '@prisma/client'
import { prisma } from '../src/server/db/client'

const prodData: Prisma.ProductCreateInput[] = [
    {
        currency: 'EUR',
        price_id: (Math.random() + 1).toString(36).substring(7),
        sku_id: (Math.random() + 1).toString(36).substring(7),
        sku: (Math.random() + 1).toString(36).substring(7),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: (Math.random() + 1).toString(36).substring(7),
        material: 'cotone',
        price: 20,
        misure: 'csdcsdcsdcsdc',
        quantity: 2,
        size: {
            create: {
                xxs: false,
                xs: false,
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false,
            },
        },

        color: {
            create: {
                purple: false,
                red: false,
                orange: false,
                yellow: false,
                black: false,
                white: false,
                pink: false,
                blue: false,
                sky: false,
                teal: false,
                green: false,
                gray: false,
            },
        },
    },
    {
        currency: 'EUR',
        price_id: (Math.random() + 1).toString(36).substring(7),
        sku_id: (Math.random() + 1).toString(36).substring(7),
        sku: (Math.random() + 1).toString(36).substring(7),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: (Math.random() + 1).toString(36).substring(7),
        material: 'cotone',
        price: 6,
        misure: 'csdcsdcsdcsdc',
        quantity: 2,
        size: {
            create: {
                xxs: false,
                xs: false,
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false,
            },
        },

        color: {
            create: {
                purple: false,
                red: false,
                orange: false,
                yellow: false,
                black: false,
                white: false,
                pink: false,
                blue: false,
                sky: false,
                teal: false,
                green: false,
                gray: false,
            },
        },
    },
    {
        currency: 'EUR',
        price_id: (Math.random() + 1).toString(36).substring(7),
        sku_id: (Math.random() + 1).toString(36).substring(7),
        sku: (Math.random() + 1).toString(36).substring(7),
        description: 'ue uajo bella sta descrizione',
        design: 'bel design',
        misure: 'csdcsdcsdcsdc',
        image: [
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
            'https://djbvayehzzzpqffzyyva.supabase.co/storage/v1/object/public/prodotti/-y1jJBWIQyxkER5HVVcVj.jpeg',
        ],
        name: (Math.random() + 1).toString(36).substring(7),
        material: 'cotone',
        price: 15,
        quantity: 1,
        size: {
            create: {
                xxs: false,
                xs: false,
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false,
            },
        },

        color: {
            create: {
                purple: false,
                red: false,
                orange: false,
                yellow: false,
                black: false,
                white: false,
                pink: false,
                blue: false,
                sky: false,
                teal: false,
                green: false,
                gray: false,
            },
        },
    },
]

async function main() {
    console.log('Start seeding ...')
    await prisma.product.deleteMany()
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
