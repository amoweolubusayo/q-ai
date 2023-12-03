
import { OpenAI } from "openai";
import * as dotenv from "dotenv";
dotenv.config({ path: "/.env" });

const configuration = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const imput = req.body.imput || "";
  try {
    const response = await configuration.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.6,
      messages: [{ role: "user", content: generateAffirmation(imput) }],
    });
    const value = response.data["choices"][0]["message"]["content"].split('\n')
    res
      .status(200)
      .json({ affirmation: value[0].trim().replace(/^\d+\.\s*/, '') });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
}

function generateAffirmation(imput) {
  try {
    return `${imput}`;
  } catch (error) {
    console.error(error);
  }
}