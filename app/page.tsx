import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <img
          src="/background.svg"
          alt="Background"
          className="min-h-screen w-full object-cover"
        />
      </div>

      <p className="z-10 text-l text-gray-600 mt-32 -ml-15">
        Empowering Smart Decisions for Startups
      </p>
    </main>
  );
}
