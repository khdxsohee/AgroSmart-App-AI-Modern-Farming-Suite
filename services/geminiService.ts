
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const diagnoseCrop = async (imageBase64: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-2.5-flash-image';
  
  const prompt = "As an expert agronomist, analyze this crop image. Identify the plant, detect any diseases or pests, and provide specific, actionable organic and chemical solutions. Keep the tone professional but accessible.";
  
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: imageBase64,
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: [imagePart, { text: prompt }] },
    });
    return response.text || "I couldn't analyze the image. Please try again with a clearer photo.";
  } catch (error) {
    console.error("Diagnosis error:", error);
    return "An error occurred during diagnosis. Please check your connection.";
  }
};

export const chatWithAgronomist = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are 'AgroSmart AI Assistant', a world-class agricultural expert. You help farmers with soil management, irrigation, pest control, and market trends. Provide short, practical, and scientific advice. Use bullet points where appropriate.",
    }
  });

  try {
    const result = await chat.sendMessage({ message });
    return result.text || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now.";
  }
};

export const getSmartAgriculturalAdvice = async (weather: any, location: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Give 3 very short agricultural tips for a farmer in ${location} where the weather is ${weather.temp}°C and ${weather.condition}. Focus on irrigation and fertilizer timing.`,
  });
  return response.text || "Stay hydrated and check your soil moisture.";
};
