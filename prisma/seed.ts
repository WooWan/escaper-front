import { prisma } from '@/src/lib/prisma'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

async function main() {
  const coolPath = path.join(__dirname, 'results.csv')
  fs.createReadStream(coolPath)
    .pipe(csv())
    .on('data', async (row) => {
      await prisma.cafe.create({
        data: {
          phoneNumber: row.phoneNumber,
          website: row.website,
          name: row.name,
          city: row.city,
          area: row.area,
          rating: 0,
          street: row.street,
        },
      })
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
