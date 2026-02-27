import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface GenerateStoryParams {
  childName: string;
  childAge: number;
  theme: string;
  language: string;
}

interface GeneratedStory {
  title: string;
  content: string;
}

const LANGUAGE_NAMES: Record<string, string> = {
  fr: 'French',
  en: 'English',
  es: 'Spanish',
  pt: 'Portuguese',
  de: 'German',
};

export async function generateStory({
  childName,
  childAge,
  theme,
  language,
}: GenerateStoryParams): Promise<GeneratedStory> {
  const langName = LANGUAGE_NAMES[language] || 'French';

  const prompt = `You are a talented children's book author. Write a magical, engaging bedtime story entirely in ${langName}.

Story requirements:
- The main hero/heroine is a child named "${childName}", aged ${childAge} years old
- Theme: ${theme}
- Language: ${langName} (VERY IMPORTANT: the entire story must be written in ${langName})
- Length: 400-600 words
- Tone: warm, magical, age-appropriate for a ${childAge}-year-old
- Structure: beginning (introduce hero and setting), middle (exciting adventure/challenge), end (happy resolution with a gentle moral lesson)
- The child "${childName}" must be the central hero who solves the problem
- Include vivid, imaginative descriptions
- End with a peaceful, sleep-inducing conclusion

Respond ONLY with a valid JSON object in this exact format (no markdown, no extra text):
{
  "title": "The story title in ${langName}",
  "content": "The full story text in ${langName}, with paragraphs separated by \\n\\n"
}`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

  try {
    const parsed = JSON.parse(responseText);
    return {
      title: parsed.title || `The Adventure of ${childName}`,
      content: parsed.content || responseText,
    };
  } catch {
    // Fallback if JSON parsing fails
    const titleMatch = responseText.match(/"title"\s*:\s*"([^"]+)"/);
    const contentMatch = responseText.match(/"content"\s*:\s*"([\s\S]+?)"\s*\}/);
    return {
      title: titleMatch?.[1] || `The Adventure of ${childName}`,
      content: contentMatch?.[1]?.replace(/\\n/g, '\n') || responseText,
    };
  }
}
