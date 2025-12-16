import { Badge, Exercise, UserProfile } from "./types";

export const MOCK_PROFILE: UserProfile = {
  firstName: "Jack",
  lastName: "Sullivan",
  email: "jacksullivan@gmail.com",
  age: 28,
  weight: 82,
  goal: "Lose Weight"
};

export const BADGES: Badge[] = [
  {
    id: "1",
    title: "7 Days In a row",
    description: "Complete & win this badge",
    progress: 40,
    maxProgress: 100,
    status: "in_progress",
    iconColor: "text-amber-400"
  },
  {
    id: "2",
    title: "Wellness expert",
    description: "Visited all hotel fitness & wellness",
    progress: 17,
    maxProgress: 100,
    status: "in_progress",
    iconColor: "text-amber-500"
  },
  {
    id: "3",
    title: "Community challenge",
    description: "10 days ago",
    progress: 100,
    maxProgress: 100,
    status: "completed",
    iconColor: "text-amber-600"
  },
  {
    id: "4",
    title: "14 Days In a row",
    description: "Coming Soon",
    progress: 0,
    maxProgress: 100,
    status: "upcoming",
    iconColor: "text-slate-400"
  }
];

export const UPCOMING_EXERCISES: Exercise[] = [
  {
    id: "ex1",
    name: "Goblet Squat",
    duration: "40 sec",
    sets: 4,
    reps: "10",
    level: "Advanced",
    targetMuscle: "Quadriceps",
    recovery: "1 Min Recovery",
    image: "https://picsum.photos/seed/squat/100/100"
  },
  {
    id: "ex2",
    name: "Push-up",
    duration: "2 min",
    sets: 4,
    reps: "10",
    level: "Beginner",
    targetMuscle: "Chest/Tri",
    recovery: "30 Sec Recovery",
    image: "https://picsum.photos/seed/pushup/100/100"
  },
  {
    id: "ex3",
    name: "Plank",
    duration: "1 min",
    sets: 1,
    level: "Advanced",
    targetMuscle: "Core",
    recovery: "1 Min Recovery",
    image: "https://picsum.photos/seed/plank/100/100"
  }
];

export const WEEKLY_CALORIES = [
  { name: 'Mon', calories: 1200 },
  { name: 'Tue', calories: 900 },
  { name: 'Wed', calories: 1500 },
  { name: 'Thu', calories: 800 },
  { name: 'Fri', calories: 1300 },
  { name: 'Sat', calories: 2100 },
  { name: 'Sun', calories: 600 },
];

export const VOLUME_DATA = [
  { day: '16', weight: 0 },
  { day: '18', weight: 20 },
  { day: '20', weight: 15 },
  { day: '24', weight: 28 },
  { day: '28', weight: 22 },
  { day: '32', weight: 18 },
  { day: '40', weight: 30 },
  { day: '44', weight: 30 },
  { day: '48', weight: 25 },
  { day: '50', weight: 35 },
  { day: '56', weight: 60 },
];
