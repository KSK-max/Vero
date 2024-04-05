export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <img
          src="/background.svg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      <header className="absolute top-0 left-0 z-20 w-full px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-start">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
          />
        </div>
      </header>

      <div className="z-10 px-4 text-center mb-4 sm:px-6 md:px-8 lg:mb-6 xl:mb-8">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-yellow-400">Coming</span>
          <span className="text-black"> Soon</span>
        </h1>
      </div>

      <div className="z-10 px-4 text-center sm:px-6 md:px-8">
        <p className="text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-3xl">
          Empowering Smart Decisions for Startups
        </p>
      </div>
    </main>
  );
}
