import Link from "next/link";

export default function Chat() {

  return (
    <div className="flex flex-col w-dvw h-dvh gap-4 items-center justify-center">
      <Link href="/chat" className="bg-blue-500 text-white p-2 rounded-md">Try out the Chat</Link>
      <Link href="/completion" className="bg-blue-500 text-white p-2 rounded-md">Try out the Completion</Link>
    </div>
  );
}