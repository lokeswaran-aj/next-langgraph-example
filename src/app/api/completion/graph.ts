import { BaseMessage } from '@langchain/core/messages'
import { Annotation, END, START, StateGraph } from '@langchain/langgraph'
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0,
  apiKey: process.env.OPENAI_API_KEY,
  streaming: true,
})

const MessagesAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (state: BaseMessage[], update: BaseMessage[]) =>
      state.concat(update),
    default: () => [],
  }),
})

async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model.invoke(state.messages)

  return { messages: [response] }
}

const workflow = new StateGraph(MessagesAnnotation)
  .addNode('agent', callModel)
  .addEdge(START, 'agent')
  .addEdge('agent', END)

export const app = workflow.compile()
