import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-6xl font-bold">We are coming, soon</h1>
      <p className="mt-3 text-2xl font-light text-center text-gray-400">
        We don't care if we are late, we just want to be perfect
      </p>
    </main>
  );
}
