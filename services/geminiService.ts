import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCoachResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: "You are Coach Mike, an enthusiastic, friendly, and motivational fitness coach. Keep your answers concise (under 50 words), encouraging, and focused on fitness, health, and wellness. You are speaking to the user directly.",
      },
    });

    return response.text || "Let's get moving! I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the fitness cloud right now. Let's focus on your breathing!";
  }
};
