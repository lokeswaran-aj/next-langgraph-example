'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({});

  return (
    <div className="flex flex-col container mx-auto p-6 w-dvw h-dvh gap-4 items-start justify-between">
      <Link href="/" className="bg-blue-500 text-white p-2 rounded-md">Back to Home</Link>
      <div className="w-full flex-1">
      {messages.map(message => (
        <div key={message.id} className={`p-4 ${message.role === 'user' ? 'bg-gray-100' : 'bg-gray-200'}`}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}
        </div>

      <form onSubmit={handleSubmit} className="w-full flex gap-2">
        <input name="prompt" className="w-full p-2 rounded-md border border-blue-500" autoFocus disabled={isLoading} value={input} onChange={handleInputChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send</button>
      </form>
    </div>
  );
}