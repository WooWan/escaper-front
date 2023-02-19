import { prisma } from '../lib/prisma'

async function main() {
  const cafe = await prisma.cafe.create({
    data: {
      phoneNumber: '010-1234-5678',
      website: 'test',
      name: 'test',
      address: 'test',
      city: 'Seoul',
      rating: 5,
      id: 'clea0hwbg0000gvge9lmogmfi',
    },
  })
  const post = await prisma.escapeTheme.create({
    data: {
      name: 'test',
      description: 'test',
      imageURL: 'test',
      cost: 100,
      rating: 5,
      timeLimitation: 80,
      id: 'clea0hdbg00006vge9lmogmfi',
      cafeId: cafe.id,
    },
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
