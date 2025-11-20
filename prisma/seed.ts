import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Create Admin
  const adminPassword = 'admin'; // In a real app, this should be hashed!
  // For this demo, we'll handle hashing in the auth logic or just use simple comparison for now if we don't have bcrypt yet.
  // Let's assume we'll implement simple hashing later or just store plain for this very initial step (NOT RECOMMENDED for prod).
  // Actually, let's just store it as is and I'll add bcrypt in the auth action.
  
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: '$2b$10$EpWaTgiFbI.w/wOq.sH.Wu.sH.Wu.sH.Wu.sH.Wu.sH.Wu', // Placeholder hash or plain text to be handled
    },
  });

  // Create Sample Models
  const models = [
    {
      firstName: 'Sarah',
      lastName: 'Jenkins',
      email: 'sarah.j@example.com',
      phone: '+1234567890',
      dateOfBirth: new Date('1998-05-15'),
      gender: 'Female',
      city: 'New York',
      country: 'USA',
      height: 178,
      bustChest: 85,
      waist: 60,
      hips: 90,
      shoeSize: 39,
      hairColor: 'Blonde',
      eyeColor: 'Blue',
      experienceLevel: 'Professional',
      yearsExperience: 4,
      categories: JSON.stringify(['Fashion', 'Commercial', 'Runway']),
      status: 'ACTIVE',
      featured: true,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
            type: 'PROFILE',
            isPrimary: true,
          },
          {
            url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop',
            type: 'PORTFOLIO',
            category: 'FASHION',
          }
        ]
      }
    },
    {
      firstName: 'David',
      lastName: 'Chen',
      email: 'david.c@example.com',
      phone: '+1987654321',
      dateOfBirth: new Date('1995-08-22'),
      gender: 'Male',
      city: 'London',
      country: 'UK',
      height: 185,
      bustChest: 98,
      waist: 78,
      hips: 95,
      shoeSize: 43,
      hairColor: 'Black',
      eyeColor: 'Brown',
      experienceLevel: 'Professional',
      yearsExperience: 6,
      categories: JSON.stringify(['Commercial', 'Fitness']),
      status: 'ACTIVE',
      featured: true,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
            type: 'PROFILE',
            isPrimary: true,
          }
        ]
      }
    },
    {
      firstName: 'Elena',
      lastName: 'Rodriguez',
      email: 'elena.r@example.com',
      phone: '+1122334455',
      dateOfBirth: new Date('2000-01-10'),
      gender: 'Female',
      city: 'Barcelona',
      country: 'Spain',
      height: 175,
      bustChest: 88,
      waist: 62,
      hips: 92,
      shoeSize: 38,
      hairColor: 'Brown',
      eyeColor: 'Green',
      experienceLevel: 'Intermediate',
      yearsExperience: 2,
      categories: JSON.stringify(['Fashion', 'Editorial']),
      status: 'ACTIVE',
      featured: false,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
            type: 'PROFILE',
            isPrimary: true,
          }
        ]
      }
    },
    {
      firstName: 'Michael',
      lastName: 'Ross',
      email: 'michael.r@example.com',
      phone: '+1555666777',
      dateOfBirth: new Date('1992-11-30'),
      gender: 'Male',
      city: 'Los Angeles',
      country: 'USA',
      height: 188,
      bustChest: 102,
      waist: 82,
      hips: 100,
      shoeSize: 44,
      hairColor: 'Brown',
      eyeColor: 'Hazel',
      experienceLevel: 'Professional',
      yearsExperience: 8,
      categories: JSON.stringify(['Fitness', 'Commercial', 'Editorial']),
      status: 'ACTIVE',
      featured: true,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
            type: 'PROFILE',
            isPrimary: true,
          }
        ]
      }
    },
    {
      firstName: 'Aisha',
      lastName: 'Patel',
      email: 'aisha.p@example.com',
      phone: '+1444333222',
      dateOfBirth: new Date('1999-03-25'),
      gender: 'Female',
      city: 'Toronto',
      country: 'Canada',
      height: 172,
      bustChest: 84,
      waist: 60,
      hips: 88,
      shoeSize: 37,
      hairColor: 'Black',
      eyeColor: 'Dark Brown',
      experienceLevel: 'Beginner',
      yearsExperience: 1,
      categories: JSON.stringify(['Commercial', 'Fashion']),
      status: 'ACTIVE',
      featured: false,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop',
            type: 'PROFILE',
            isPrimary: true,
          }
        ]
      }
    }
  ];

  for (const model of models) {
    await prisma.model.upsert({
      where: { email: model.email },
      update: {},
      create: model,
    });
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
