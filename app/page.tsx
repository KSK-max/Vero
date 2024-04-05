import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src="/background.svg"
          alt="Background"
          className="min-h-screen w-full object-cover"
        />
      </div>

      {/* Logo in the top-left corner */}
      <div className="absolute top-0 left-0 z-10 p-5">
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto sm:h-12" />
      </div>

      {/* Text */}
      <p className="z-10 text-base sm:text-lg text-gray-600 mt-32 -ml-10">
        Empowering Smart Decisions for Startups
      </p>
    </main>
  );
}
