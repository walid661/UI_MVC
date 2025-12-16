export enum View {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  STATISTICS = 'STATISTICS',
  TRAINING = 'TRAINING',
  REWARDS = 'REWARDS',
  SETTINGS = 'SETTINGS',
  WORKOUT = 'WORKOUT'
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  weight: number;
  goal: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  status: 'completed' | 'in_progress' | 'upcoming';
  iconColor: string;
}

export interface Exercise {
  id: string;
  name: string;
  duration?: string;
  reps?: string;
  sets?: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  targetMuscle: string;
  recovery: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
