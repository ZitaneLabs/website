import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 md:p-24 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center flex gap-2">
          <span className="text-gray-200">Zitane</span>
          <span className="text-white font-bold">Labs</span>
        </h1>
        <h2 className="uppercase text-lg">
          Eestis valmistatud Saarimaa tarkvara
        </h2>
      </div>
      <div className="flex justify-center gap-4">
        <img className="object-contain h-24 justify-center drop-shadow-md" src="/assets/estonia.svg" />
        <img className="object-contain h-24 drop-shadow-md" src="/assets/saarland.svg" />
      </div>
    </main>
  )
}
