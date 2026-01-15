
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askPortfolioAssistant(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Context about the candidate: ${context}\n\nQuestion: ${question}`,
      config: {
        systemInstruction: "You are a professional AI assistant for Sarah Mukami Gichure, a Real Estate student at the University of Nairobi. Your goal is to help recruiters understand the candidate's skills, projects, and potential. Keep answers concise, professional, and focused on Kenyan real estate expertise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble responding right now. Please try again or contact the candidate directly!";
  }
}
