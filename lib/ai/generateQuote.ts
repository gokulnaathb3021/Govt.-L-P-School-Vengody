"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateQuote(summary: string) {
  const prompt = `

A certain student's overall academic performnace summary:
${summary}

Instructions:
-Give a motivational quote based on the summary, preferably a quote made by some great person or philospoher. 
-Just the quote and the name of the person who gave it. Nothing else.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
