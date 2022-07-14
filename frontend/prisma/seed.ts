import  Prisma  from '@prisma/client'
import prisma from '../src/content/lib/prisma'

// const arrPIANO1: any = []
// const arrPIANO2: any = []

// for (let x = 0; x < 50; x++) {
//     arrPIANO1[x] = { posto: x, piano: 1, parcheggio_stato: false }
// }

// for (let y = 0; y < 50; y++) {
//     arrPIANO2[y] = { posto: y, piano: 2, parcheggio_stato: false }
// }

// const rfidData: Prisma.RfidsCreateInput[] = [
//     {
//         codice: '15725016189159',
//         stato: false,
//     },
//     {
//         codice: '21721418013750',
//         stato: false,
//     },
//     {
//         codice: '1921269426250',
//         stato: false,
//     },
//     {
//         codice: '1184298172146',
//         stato: false,
//     },
// ]

// const parcheggiData: Prisma.ParcheggiCreateInput[] = arrPIANO1
// const parcheggiData2: Prisma.ParcheggiCreateInput[] = arrPIANO2

async function main() {
    console.log('Start seeding ...')
    // await prisma.parcheggi.deleteMany({})
    // await prisma.rfids.deleteMany({})
    // const parcheggi = await prisma.parcheggi.createMany({
    //     data: parcheggiData,
    // })
    // const parcheggi2 = await prisma.parcheggi.createMany({
    //     data: parcheggiData2,
    // })
    // const rfid = await prisma.rfids.createMany({
    //     data: rfidData,
    // })
    // eslint-disable-next-line quotes
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
