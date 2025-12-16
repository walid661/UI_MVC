import { ChatResponse, ProgramResponse } from "../types";

// Mock implementation of the chat response
export const mockChatResponse = async (input: string): Promise<ChatResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        answer: "Based on your request, here is a quick tip:\n\n- **Focus on form**: Quality over quantity.\n- **Hydrate**: Drink water before and after.",
        sources: [{ title: "General Wellness Guidelines", score: 0.92 }]
      });
    }, 1000);
  });
};

// Mock implementation of the program generation
export const mockProgramGeneration = async (): Promise<ProgramResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        plan_text: `## Week 1: Foundation & Strength

### Monday: Upper Body Push
1. **Bench Press**: 4 sets of 8 reps (RPE 8)
   - *Focus on controlled eccentric phase*
2. **Incline Dumbbell Press**: 3 sets of 12 reps
3. **Lateral Raises**: 3 sets of 15 reps

### Wednesday: Lower Body
1. **Goblet Squats**: 4 sets of 10 reps
2. **Romanian Deadlifts**: 3 sets of 12 reps
   - *Keep back straight, hinge at hips*

### Friday: Full Body & Core
1. **Pull-ups**: 3 sets to failure
2. **Plank**: 3 sets of 60 seconds
3. **Kettlebell Swings**: 3 sets of 20 reps`
      });
    }, 3000); // 3 seconds loading as requested
  });
};
