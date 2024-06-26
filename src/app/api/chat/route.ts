import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}

// See https://sdk.vercel.ai/docs/troubleshooting/migration-guide for migration from 3.0