import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/background.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Logo in the top-left corner */}
      <header className="absolute top-0 left-0 z-20 w-full px-4 py-2">
        <div className="flex items-center justify-start w-full">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto md:h-10" />
        </div>
      </header>

      {/* Text */}
      <div className="z-10 p-4 text-center">
        <p className="text-sm text-gray-600 md:text-lg lg:text-xl">
          Empowering Smart Decisions for Startups
        </p>
      </div>
    </main>
  );
}
