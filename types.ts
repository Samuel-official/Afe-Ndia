import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MenuItemProps {
  image: string;
  title: string;
  category: string;
}

export interface ReviewProps {
  name: string;
  rating: number;
  text: string;
  date: string;
}