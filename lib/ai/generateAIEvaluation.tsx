"use server";
import { revalidatePath } from "next/cache";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateStudentFeedback(
  grades: Record<string, Record<string, string>>,
  admissionNumber: number,
) {
  console.log(grades);
  const prompt = `
You are a school teacher writing short feedback about a student.

Below is the student's performance data JSON format.

Student data:
${JSON.stringify(grades, null, 2)}

Instructions:
- Write a short feedback paragraph for each term.
- Mention strengths and areas of improvement if present, along with tips for improving.
- Keep the tone positive and constructive.
- Do not mention JSON or data structure.
- Write in simple teacher language suitable for a school report card.
- If extracurricular activities data is given, then comment on that as well.
- Keep it at 100 words.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [{ role: "user", content: prompt }],
  });
  revalidatePath(`/explore/${admissionNumber}`);

  return response.choices[0].message.content;
}
