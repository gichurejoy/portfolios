
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI((import.meta as any).env.VITE_GEMINI_API_KEY);

export async function askPortfolioAssistant(question: string, context: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: "You are a professional AI assistant for Sarah Mukami Gichure, a Real Estate student at the University of Nairobi. Your goal is to help recruiters understand the candidate's skills, projects, and potential. Keep answers concise, professional, and focused on Kenyan real estate expertise. Please provide responses in plain text only and do not use Markdown or bold formatting."
    });

    const prompt = `Context about the candidate: ${context}\n\nQuestion: ${question}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    // Return the actual error message if possible for debugging, otherwise a user-friendly one
    if (error instanceof Error) {
      return `Error: ${error.message}. Please try again later.`;
    }
    return "I'm having trouble responding right now. Please try again or contact the candidate directly!";
  }
}
