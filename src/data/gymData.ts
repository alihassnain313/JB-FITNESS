import { BusinessInfo, TrainingCategory, WhyChooseItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'JB FITNESS GYM',
  tagline: 'TRAIN HARD. GET STRONGER. BECOME BETTER.',
  category: 'Gym / Fitness Center',
  address: {
    line1: 'Shree Banke Bihari Plaza',
    landmark: 'Near Income Tax Office',
    area: 'City Center, Kailash Vihar, Tulsi Vihar Colony',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    pincode: '474002',
    country: 'India',
    full: 'Shree Banke Bihari Plaza, Near Income Tax Office, City Center, Kailash Vihar, Tulsi Vihar Colony, Gwalior, Madhya Pradesh 474002, India',
  },
  phone: '+91 75780 26614',
  formattedPhone: '+91 75780 26614',
  googleRating: 4.8,
  totalReviews: 143,
  googleMapsUrl: 'https://maps.app.goo.gl/XC9SPs66xNFnbpD56',
  whatsappUrl: 'https://wa.me/917578026614?text=Hi%20JB%20Fitness%20Gym%2C%20I%20am%20interested%20in%20joining%20the%20gym.%20Please%20share%20details.',
};

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    tagline: 'Build Raw Power & Core Stability',
    description: 'Develop total-body strength, improve joint stability, and increase bone density through structured progressive resistance workouts.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Dumbbell',
    focusAreas: ['Compound Movements', 'Core Stability', 'Power Output'],
  },
  {
    id: 'weight-training',
    title: 'Weight Training',
    tagline: 'Sculpt & Strengthen Every Muscle Group',
    description: 'Targeted free weight and barbell workouts engineered to sculpt physique, increase muscle tone, and improve posture.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Flame',
    focusAreas: ['Free Weights', 'Barbell Drills', 'Isolation Movements'],
  },
  {
    id: 'cardio',
    title: 'Cardio',
    tagline: 'Stamina, Endurance & Fat Burn',
    description: 'High-energy cardiovascular conditioning to boost heart health, elevate metabolism, and burn stubborn calories effectively.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop',
    iconName: 'HeartPulse',
    focusAreas: ['Endurance', 'Calorie Burn', 'Cardiovascular Health'],
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    tagline: 'Real-World Agility & Athletic Performance',
    description: 'Multi-joint dynamic exercises that train your muscles to work together efficiently for daily vitality and athletic resilience.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Activity',
    focusAreas: ['Mobility & Balance', 'Dynamic Movement', 'Joint Health'],
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    tagline: 'Hypertrophy & Physique Transformation',
    description: 'Focused hypertrophy training principles designed to stimulate optimal muscle growth and aesthetic muscular definition.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Zap',
    focusAreas: ['Hypertrophy', 'Volume Training', 'Muscle Symmetry'],
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    tagline: 'Energy, Longevity & Daily Wellbeing',
    description: 'Well-rounded fitness conditioning suitable for all fitness levels to maintain healthy weight, boost energy, and reduce stress.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    iconName: 'ShieldCheck',
    focusAreas: ['Overall Wellness', 'Energy Boost', 'Stress Relief'],
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'result-focused',
    title: 'RESULT-FOCUSED TRAINING',
    description: 'Stay consistent and work toward measurable fitness goals with a structured workout atmosphere.',
    iconName: 'Target',
  },
  {
    id: 'energetic-environment',
    title: 'ENERGETIC ENVIRONMENT',
    description: 'Train in a high-octane atmosphere surrounded by focused individuals designed to keep you motivated every single set.',
    iconName: 'Flame',
  },
  {
    id: 'convenient-location',
    title: 'CONVENIENT CITY CENTER LOCATION',
    description: 'Easy to access in the prime City Center hub of Gwalior, near Income Tax Office in Kailash Vihar.',
    iconName: 'MapPin',
  },
  {
    id: 'fitness-for-every-goal',
    title: 'FITNESS FOR EVERY GOAL',
    description: 'Whether your goal is strength, muscle building, conditioning, or general fitness, make every workout count.',
    iconName: 'Trophy',
  },
  {
    id: 'motivation-to-keep-going',
    title: 'MOTIVATION TO KEEP GOING',
    description: 'Build discipline, consistency, and confidence one workout at a time in an encouraging local community.',
    iconName: 'TrendingUp',
  },
  {
    id: 'highly-rated',
    title: 'HIGHLY RATED BY MEMBERS',
    description: 'Rated 4.8/5 on Google based on 143 real reviews from active fitness enthusiasts across Gwalior.',
    iconName: 'Star',
  },
];

export const FITNESS_GOALS = [
  'Strength Training',
  'Muscle Building / Hypertrophy',
  'Weight Loss / Fat Burn',
  'Cardio & Stamina',
  'Functional Fitness & Mobility',
  'General Fitness & Wellbeing',
];
