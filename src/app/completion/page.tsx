'use client';

import { useCompletion } from 'ai/react';
import Link from 'next/link';

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion();

  return (
    <div className="flex flex-col container mx-auto p-6 w-dvw h-dvh gap-4 items-start justify-between">
      <Link href="/" className="bg-blue-500 text-white p-2 rounded-md">Back to Home</Link>
      <div className="w-full flex-1">
        {isLoading && <div className="flex justify-center items-center"><div className="animate-spin rounded-full h-6 w-6 border-t-2 border-gray-500"></div></div>}
        {completion}
      </div>
      <form onSubmit={handleSubmit} className="w-full flex gap-2">
        <input className="w-full p-2 rounded-md border border-blue-500" value={input} autoFocus onChange={handleInputChange} disabled={isLoading} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send</button>
      </form>
    </div>
  );
}