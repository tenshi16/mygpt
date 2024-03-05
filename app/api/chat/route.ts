import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { Message, StreamingTextResponse } from "ai";
import { ollama, streamText } from "modelfusion";

export const runtime = 'edge';

export async function POST(req: Request) {
  // useChat will send a JSON with a messages property:
  const { messages }: { messages: Message[] } = await req.json();

  const model = ollama
  .ChatTextGenerator({ model: "dolphin-mistral" })
  .withChatPrompt();

  const prompt = {
    system: "You are an AI chatbot. Follow the user's instructions carefully.",

    // map Vercel AI SDK Message to ModelFusion ChatMessage:
    messages: asChatMessages(messages),
  };

  const textStream = await streamText({ model, prompt });
  // Return the result using the Vercel AI SDK:
  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}

