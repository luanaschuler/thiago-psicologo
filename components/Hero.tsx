"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0c2a3d] text-white mt-6"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-103"
        src="/maybe_thiago.mp4"
      />
      <div className="absolute inset-0" />
      {/* Transição esbranquiçada e esfumada muito mais evidente */}
      <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-white/100 via-white/50 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-end justify-end px-6 py-16">
        <div className="grid gap-8 w-full lg:grid-cols-[1.1fr_1fr] items-end">
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[38rem]">
            <Image
              src="/joia3.jpeg"
              alt="Atendimento psicológico"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right: glass card que acompanha o título na parte inferior direita */}
          <div className="flex items-end">
            <div className="w-full max-w-2xl rounded-4xl bg-white/3 border border-[#94c5de]/10 p-6 backdrop-blur-2xl shadow-2xl flex flex-col justify-end">
              <div className="flex-1" />
              <div className="text-right">
                <Image
                  src="/Ativo_1.svg"
                  alt="Logo"
                  width={420}
                  height={420}
                  className="inline-block mb-4"
                />
                <h1 className="text-3xl md:text-4xl font-semibold text-[#0c2a3d] leading-tight font-family-[New Title]">
                  Psicologia para saúde emocional, acolhimento e mudança real.
                </h1>
                <p className="mt-4 text-[#0c2a3d]/90 max-w-lg ml-auto">
                  Um olhar profissional e humano para apoiar sua evolução com
                  empatia e clareza.
                </p>
                <div className="mt-6 flex justify-end">
                  <a
                    href="#contato"
                    className="inline-flex rounded-full bg-[#f1972e] px-6 py-3 text-sm font-semibold text-[#0c2a3d] transition hover:bg-[#d58224]"
                  >
                    Agendar sessão
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
