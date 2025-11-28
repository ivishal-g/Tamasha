import { generateText } from "ai";
import { geminiModel } from "./ai";

export async function generateRoast(input: string, tier: string) {
  const prompt = `
You are TAMASHA AI.

Roast Tier: ${tier}

Rules:
- GO: light roast
- PRO: medium roast, no hardcore abuse
- ULTRA PRO: desi humor, gali-style but SAFE and humorous
- Add tech jokes
- Add meme punchline
- Make roast original, not repetitive

User Input:
${input}
`;

  const { text } = await generateText({
    model: geminiModel,
    prompt,
  });

  return text;
}