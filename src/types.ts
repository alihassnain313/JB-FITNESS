export interface TrainingCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  focusAreas: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  fitnessGoal: string;
  message: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: string;
  formattedPhone: string;
  googleRating: number;
  totalReviews: number;
  googleMapsUrl: string;
  whatsappUrl: string;
}
