import { HumanMessage } from '@langchain/core/messages';
import { LangChainAdapter } from 'ai';
import { app } from './graph';
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const finalState = app.streamEvents({
    messages: [new HumanMessage(prompt)],
  }, { streamMode: "updates", version: "v2" });

  return LangChainAdapter.toDataStreamResponse(finalState);
}