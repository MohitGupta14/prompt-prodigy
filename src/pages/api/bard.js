import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  const { prompt, apiKey } = req.body;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.status(200).json({ text });
  } catch (error) {
    console.error("Error generating content:", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
