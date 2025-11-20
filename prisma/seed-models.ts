import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const models = [
    // HIGH FASHION MODELS (6 models)
    {
        firstName: 'Elena', lastName: 'Volkova', gender: 'Female',
        height: 178, age: 22, category: 'High Fashion',
        weight: 58, bustChest: 86, waist: 61, hips: 89, shoeSize: 39,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 4,
        specialSkills: 'Runway, Editorial, High Fashion Photography',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Marcus', lastName: 'Sterling', gender: 'Male',
        height: 188, age: 25, category: 'High Fashion',
        weight: 78, bustChest: 98, waist: 78, hips: 95, shoeSize: 43,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 6,
        specialSkills: 'Runway, Editorial, Magazine Covers',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Natasha', lastName: 'Ivanova', gender: 'Female',
        height: 180, age: 24, category: 'High Fashion',
        weight: 60, bustChest: 85, waist: 60, hips: 88, shoeSize: 40,
        hairColor: 'Red', eyeColor: 'Green',
        experienceLevel: 'Professional', yearsExperience: 5,
        specialSkills: 'Haute Couture, Runway, Print',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Alessandro', lastName: 'Romano', gender: 'Male',
        height: 185, age: 27, category: 'High Fashion',
        weight: 75, bustChest: 96, waist: 76, hips: 92, shoeSize: 42,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'Luxury Brands, Runway, International Campaigns',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Zara', lastName: 'Khan', gender: 'Female',
        height: 175, age: 21, category: 'High Fashion',
        weight: 56, bustChest: 84, waist: 58, hips: 86, shoeSize: 38,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 2,
        specialSkills: 'Editorial, Fashion Week, Digital Campaigns',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Viktor', lastName: 'Petrov', gender: 'Male',
        height: 190, age: 26, category: 'High Fashion',
        weight: 80, bustChest: 100, waist: 80, hips: 96, shoeSize: 44,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 5,
        specialSkills: 'Runway, Luxury Fashion, Print Campaigns',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop'
    },

    // CORPORATE MODELS (6 models)
    {
        firstName: 'Sarah', lastName: 'Miller', gender: 'Female',
        height: 170, age: 28, category: 'Corporate',
        weight: 62, bustChest: 88, waist: 68, hips: 94, shoeSize: 38,
        hairColor: 'Brown', eyeColor: 'Hazel',
        experienceLevel: 'Professional', yearsExperience: 8,
        specialSkills: 'Business Photography, Corporate Events, Presentations',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'David', lastName: 'Chen', gender: 'Male',
        height: 180, age: 32, category: 'Corporate',
        weight: 76, bustChest: 98, waist: 82, hips: 95, shoeSize: 42,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 10,
        specialSkills: 'Executive Portraits, Corporate Campaigns, Business Events',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Amanda', lastName: 'Thompson', gender: 'Female',
        height: 168, age: 30, category: 'Corporate',
        weight: 60, bustChest: 86, waist: 66, hips: 92, shoeSize: 37,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 9,
        specialSkills: 'Professional Headshots, Corporate Videos, Trade Shows',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Rajesh', lastName: 'Kumar', gender: 'Male',
        height: 178, age: 35, category: 'Corporate',
        weight: 80, bustChest: 102, waist: 86, hips: 98, shoeSize: 41,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 12,
        specialSkills: 'Business Conferences, Corporate Training Videos, Executive Photography',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Emily', lastName: 'Roberts', gender: 'Female',
        height: 172, age: 27, category: 'Corporate',
        weight: 58, bustChest: 84, waist: 64, hips: 90, shoeSize: 38,
        hairColor: 'Auburn', eyeColor: 'Green',
        experienceLevel: 'Intermediate', yearsExperience: 5,
        specialSkills: 'Professional Settings, Team Photos, Marketing Materials',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Michael', lastName: 'Johnson', gender: 'Male',
        height: 183, age: 29, category: 'Corporate',
        weight: 78, bustChest: 100, waist: 84, hips: 96, shoeSize: 43,
        hairColor: 'Brown', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'Corporate Videos, Business Photography, Annual Reports',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop'
    },

    // HOSPITALITY / FINE DINING (6 models)
    {
        firstName: 'Maria', lastName: 'Rodriguez', gender: 'Female',
        height: 168, age: 24, category: 'Fine Dining',
        weight: 56, bustChest: 85, waist: 62, hips: 88, shoeSize: 37,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 3,
        specialSkills: 'Restaurant Photography, Hospitality Marketing, Social Media Content',
        image: 'https://images.unsplash.com/photo-1583336137348-c86cbd247391?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'James', lastName: 'Wilson', gender: 'Male',
        height: 182, age: 27, category: 'Hotels',
        weight: 74, bustChest: 96, waist: 78, hips: 93, shoeSize: 42,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 6,
        specialSkills: 'Luxury Hotels, Guest Experience, Promotional Materials',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Layla', lastName: 'Al-Mansouri', gender: 'Female',
        height: 175, age: 26, category: 'Hotels',
        weight: 60, bustChest: 87, waist: 65, hips: 91, shoeSize: 39,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 5,
        specialSkills: 'Luxury Hospitality, Spa Services, Resort Photography',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Omar', lastName: 'Hassan', gender: 'Male',
        height: 179, age: 25, category: 'Fine Dining',
        weight: 72, bustChest: 94, waist: 76, hips: 91, shoeSize: 41,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 4,
        specialSkills: 'Fine Dining, Chef Collaborations, Culinary Photography',
        image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Sophia', lastName: 'Martinez', gender: 'Female',
        height: 170, age: 23, category: 'Hotels',
        weight: 58, bustChest: 86, waist: 63, hips: 89, shoeSize: 38,
        hairColor: 'Brown', eyeColor: 'Green',
        experienceLevel: 'Intermediate', yearsExperience: 3,
        specialSkills: 'Hotel Lifestyle, Guest Services, Hospitality Videos',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Luca', lastName: 'Rossi', gender: 'Male',
        height: 181, age: 28, category: 'Fine Dining',
        weight: 75, bustChest: 97, waist: 79, hips: 94, shoeSize: 42,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 6,
        specialSkills: 'Restaurant Campaigns, Food Photography, Lifestyle Content',
        image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=800&h=1000&fit=crop'
    },

    // E-COMMERCE (6 models)
    {
        firstName: 'Sophie', lastName: 'Taylor', gender: 'Female',
        height: 174, age: 21, category: 'E-commerce',
        weight: 57, bustChest: 85, waist: 61, hips: 88, shoeSize: 38,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Intermediate', yearsExperience: 2,
        specialSkills: 'Product Modeling, Lifestyle Shoots, Social Commerce',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Daniel', lastName: 'Park', gender: 'Male',
        height: 186, age: 24, category: 'E-commerce',
        weight: 76, bustChest: 98, waist: 80, hips: 95, shoeSize: 43,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 3,
        specialSkills: 'Fashion E-commerce, Catalog Shoots, Lifestyle Modeling',
        image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Isabella', lastName: 'Costa', gender: 'Female',
        height: 172, age: 22, category: 'E-commerce',
        weight: 56, bustChest: 84, waist: 60, hips: 86, shoeSize: 37,
        hairColor: 'Brown', eyeColor: 'Hazel',
        experienceLevel: 'Intermediate', yearsExperience: 2,
        specialSkills: 'Online Retail, Product Photography, Fashion Lookbooks',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Noah', lastName: 'Williams', gender: 'Male',
        height: 184, age: 26, category: 'E-commerce',
        weight: 78, bustChest: 100, waist: 82, hips: 96, shoeSize: 43,
        hairColor: 'Brown', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 5,
        specialSkills: 'Menswear E-commerce, Lifestyle Content, Brand Campaigns',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Olivia', lastName: 'Anderson', gender: 'Female',
        height: 176, age: 23, category: 'E-commerce',
        weight: 59, bustChest: 86, waist: 62, hips: 89, shoeSize: 39,
        hairColor: 'Auburn', eyeColor: 'Green',
        experienceLevel: 'Intermediate', yearsExperience: 3,
        specialSkills: 'Fashion Retail, Digital Campaigns, Product Launches',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Ethan', lastName: 'Brown', gender: 'Male',
        height: 182, age: 25, category: 'E-commerce',
        weight: 74, bustChest: 96, waist: 78, hips: 93, shoeSize: 42,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 4,
        specialSkills: 'Online Fashion, Catalog Modeling, Social Media',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop'
    },

    // HEALTHCARE / HOSPITALS (5 models)
    {
        firstName: 'Priya', lastName: 'Patel', gender: 'Female',
        height: 165, age: 29, category: 'Hospitals',
        weight: 58, bustChest: 86, waist: 66, hips: 90, shoeSize: 37,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'Medical Photography, Healthcare Campaigns, Patient Education Materials',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Thomas', lastName: 'Anderson', gender: 'Male',
        height: 185, age: 35, category: 'Hospitals',
        weight: 82, bustChest: 104, waist: 86, hips: 98, shoeSize: 43,
        hairColor: 'Brown', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 10,
        specialSkills: 'Healthcare Advertising, Medical Videos, Corporate Health',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Fatima', lastName: 'Ahmed', gender: 'Female',
        height: 168, age: 31, category: 'Hospitals',
        weight: 62, bustChest: 88, waist: 68, hips: 92, shoeSize: 38,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 8,
        specialSkills: 'Healthcare Marketing, Medical Facilities, Wellness Campaigns',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Christopher', lastName: 'Lee', gender: 'Male',
        height: 178, age: 33, category: 'Hospitals',
        weight: 79, bustChest: 100, waist: 84, hips: 96, shoeSize: 42,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 9,
        specialSkills: 'Medical Professionals, Healthcare Videos, Clinic Photography',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Rachel', lastName: 'Green', gender: 'Female',
        height: 170, age: 28, category: 'Hospitals',
        weight: 60, bustChest: 87, waist: 65, hips: 91, shoeSize: 38,
        hairColor: 'Brown', eyeColor: 'Hazel',
        experienceLevel: 'Professional', yearsExperience: 6,
        specialSkills: 'Healthcare Branding, Wellness Programs, Patient Care Photography',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop'
    },

    // LUXURY REAL ESTATE (5 models)
    {
        firstName: 'Victoria', lastName: 'Sinclair', gender: 'Female',
        height: 175, age: 30, category: 'Luxury Properties',
        weight: 61, bustChest: 88, waist: 66, hips: 92, shoeSize: 39,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 8,
        specialSkills: 'Luxury Real Estate, Property Photography, High-End Lifestyle',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Alexander', lastName: 'Stone', gender: 'Male',
        height: 187, age: 34, category: 'Luxury Properties',
        weight: 83, bustChest: 102, waist: 85, hips: 97, shoeSize: 44,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 11,
        specialSkills: 'Luxury Developments, Real Estate Marketing, Property Videos',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Natalie', lastName: 'Winters', gender: 'Female',
        height: 173, age: 29, category: 'Luxury Properties',
        weight: 59, bustChest: 86, waist: 64, hips: 90, shoeSize: 38,
        hairColor: 'Brown', eyeColor: 'Green',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'Residential Luxury, Property Brochures, Lifestyle Photography',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Maxwell', lastName: 'Reed', gender: 'Male',
        height: 184, age: 36, category: 'Luxury Properties',
        weight: 81, bustChest: 101, waist: 86, hips: 97, shoeSize: 43,
        hairColor: 'Salt & Pepper', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 13,
        specialSkills: 'High-End Properties, Real Estate Campaigns, Luxury Lifestyle',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Anastasia', lastName: 'Volkov', gender: 'Female',
        height: 177, age: 27, category: 'Luxury Properties',
        weight: 58, bustChest: 85, waist: 62, hips: 88, shoeSize: 39,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Intermediate', yearsExperience: 5,
        specialSkills: 'Modern Luxury, Property Tours, Digital Marketing',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop'
    },

    // TV COMMERCIAL / MEDIA (5 models)
    {
        firstName: 'Lucas', lastName: 'Bennett', gender: 'Male',
        height: 183, age: 28, category: 'TV Commercial',
        weight: 77, bustChest: 99, waist: 81, hips: 95, shoeSize: 42,
        hairColor: 'Brown', eyeColor: 'Hazel',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'TV Commercials, Acting, Voice Over, Brand Spokesperson',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Mia', lastName: 'Chang', gender: 'Female',
        height: 171, age: 25, category: 'TV Commercial',
        weight: 57, bustChest: 85, waist: 62, hips: 88, shoeSize: 38,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 5,
        specialSkills: 'Commercials, Film, Brand Ambassador, Spokesperson',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Sebastian', lastName: 'Cruz', gender: 'Male',
        height: 180, age: 26, category: 'TV Commercial',
        weight: 74, bustChest: 96, waist: 78, hips: 93, shoeSize: 41,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 4,
        specialSkills: 'TV Ads, Video Content, Social Media Campaigns',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Chloe', lastName: 'Davis', gender: 'Female',
        height: 169, age: 24, category: 'TV Commercial',
        weight: 55, bustChest: 84, waist: 60, hips: 86, shoeSize: 37,
        hairColor: 'Auburn', eyeColor: 'Blue',
        experienceLevel: 'Intermediate', yearsExperience: 3,
        specialSkills: 'Acting, Commercial Work, Digital Content, Hosting',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Jackson', lastName: 'White', gender: 'Male',
        height: 186, age: 30, category: 'TV Commercial',
        weight: 80, bustChest: 102, waist: 83, hips: 96, shoeSize: 43,
        hairColor: 'Blonde', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 8,
        specialSkills: 'Commercials, Film, Television, Brand Campaigns',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop'
    },

    // LUXURY AUTOMOTIVE (5 models)
    {
        firstName: 'Adrian', lastName: 'Knight', gender: 'Male',
        height: 185, age: 32, category: 'Luxury Cars',
        weight: 79, bustChest: 100, waist: 82, hips: 96, shoeSize: 43,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 9,
        specialSkills: 'Automotive Campaigns, Luxury Cars, Product Launches',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Valentina', lastName: 'Ferrari', gender: 'Female',
        height: 176, age: 26, category: 'Luxury Cars',
        weight: 60, bustChest: 87, waist: 63, hips: 90, shoeSize: 39,
        hairColor: 'Dark Brown', eyeColor: 'Brown',
        experienceLevel: 'Professional', yearsExperience: 6,
        specialSkills: 'Automotive Photography, Luxury Brands, High-End Campaigns',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Roman', lastName: 'Steele', gender: 'Male',
        height: 188, age: 29, category: 'Luxury Cars',
        weight: 82, bustChest: 103, waist: 84, hips: 97, shoeSize: 44,
        hairColor: 'Black', eyeColor: 'Blue',
        experienceLevel: 'Professional', yearsExperience: 7,
        specialSkills: 'Luxury Automotive, Car Shows, Brand Ambassador',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Daniela', lastName: 'Silva', gender: 'Female',
        height: 174, age: 27, category: 'Luxury Cars',
        weight: 58, bustChest: 86, waist: 62, hips: 89, shoeSize: 38,
        hairColor: 'Black', eyeColor: 'Brown',
        experienceLevel: 'Intermediate', yearsExperience: 5,
        specialSkills: 'Automotive Events, Luxury Lifestyle, Print Campaigns',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop'
    },
    {
        firstName: 'Marcus', lastName: 'Draven', gender: 'Male',
        height: 182, age: 31, category: 'Luxury Cars',
        weight: 78, bustChest: 99, waist: 81, hips: 95, shoeSize: 42,
        hairColor: 'Brown', eyeColor: 'Green',
        experienceLevel: 'Professional', yearsExperience: 8,
        specialSkills: 'Automotive Photography, High-Performance Cars, Lifestyle',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop'
    }
]

async function main() {
    console.log('Start seeding with comprehensive model profiles...')

    // Clear existing models
    await prisma.photo.deleteMany()
    await prisma.model.deleteMany()

    let created = 0

    for (const model of models) {
        const birthYear = new Date().getFullYear() - model.age

        await prisma.model.create({
            data: {
                firstName: model.firstName,
                lastName: model.lastName,
                email: `${model.firstName.toLowerCase()}.${model.lastName.toLowerCase()}@example.com`,
                phone: `+971 50 ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`,
                dateOfBirth: new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28 + 1)),
                gender: model.gender,
                city: 'Dubai',
                country: 'UAE',
                height: model.height,
                weight: model.weight,
                bustChest: model.bustChest,
                waist: model.waist,
                hips: model.hips,
                shoeSize: model.shoeSize,
                hairColor: model.hairColor,
                eyeColor: model.eyeColor,
                experienceLevel: model.experienceLevel,
                yearsExperience: model.yearsExperience,
                categories: JSON.stringify([model.category]),
                specialSkills: model.specialSkills,
                instagram: `https://instagram.com/${model.firstName.toLowerCase()}_${model.lastName.toLowerCase()}`,
                tiktok: Math.random() > 0.5 ? `https://tiktok.com/@${model.firstName.toLowerCase()}` : undefined,
                status: 'ACTIVE',
                featured: true,
                photos: {
                    create: [{
                        url: model.image,
                        type: 'PORTFOLIO',
                        isPrimary: true,
                        orderNumber: 0
                    }]
                }
            }
        })
        created++
        console.log(`✓ Created: ${model.firstName} ${model.lastName} (${model.category})`)
    }

    console.log(`\n✅ Seeding finished! Created ${created} model profiles across all industries.`)
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
