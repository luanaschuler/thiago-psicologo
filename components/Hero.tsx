"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0c2a3d] text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0" />
      {/* Vídeo de fundo cobrindo todo o hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-100 scale-105 transform filter contrast-110 saturate-110"
          src="/maybe_thiago.mp4"
        />
      </div>
      {/* Sobreposição de contraste para manter o conteúdo legível */}
      <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-r from-[#0c2a3d]/90 via-[#0c2a3d]/50 to-transparent" />
      {/* Transição esbranquiçada e esfumada muito mais evidente */}
      <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-white/100 via-white/50 to-transparent pointer-events-none" />

      {/* Ajustado para alinhar todo o bloco do conteúdo na parte inferior (justify-end) */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-end justify-end px-6 pb-6 pt-32 lg:pt-0">
        {/* O CARD GLASS (Achatado na parte inferior direita, py reduzido no desktop) */}
        <div className="w-full rounded-4xl bg-white/3 border border-[#94c5de]/10 px-6 pb-6 pt-6 lg:pb-1 lg:pt-4 backdrop-blur-2xl shadow-2xl">
          {/* items-end faz com que tanto a foto quanto o texto fiquem apoiados no "chão" do glass card */}
          <div className="grid gap-8 w-full lg:grid-cols-[1.1fr_1fr] items-end">
            {/* Coluna da Imagem com margem negativa no desktop para flutuar para fora pelo topo */}
            <div className="relative overflow-hidden rounded-4xl shadow-xl w-full max-w-[320px] lg:max-w-[385px] h-auto lg:ml-8 z-10 mx-auto lg:mx-0 lg:-mt-24 lg:-translate-y-3 transform">
              <Image
                src="/joia3.jpeg"
                alt="Atendimento psicológico"
                width={450}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Coluna do Texto */}
            <div className="flex items-end w-full">
              <div className="relative w-full max-w-2xl flex flex-col justify-end">
                <div className="text-right relative z-10">
                  <Image
                    src="/Ativo_1.svg"
                    alt="KEEPCALM"
                    width={850}
                    height={850}
                    className="mb-2 h-[260px] w-auto object-contain md:h-[310px] lg:h-[420px]"
                  />
                  <h1 className="text-2xl md:text-3xl font-semibold text-[#0c2a3d] leading-tight font-family-[New Title]">
                    Atendimento psicológico focado na sua saúde mental,
                    <br />
                    com acolhimento e mudança real.
                  </h1>
                  <p className="mt-2 text-[#0c2a3d]/90 text-sm max-w-lg ml-auto">
                    atendimento psicológico focado na sua saúde mental, com
                    acolhimento e mudança real.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a
                      href="#contato"
                      className="inline-flex rounded-full bg-[#f1972e] px-5 py-2.5 text-sm font-semibold text-[#0c2a3d] transition hover:bg-[#d58224]"
                    >
                      Agendar sessão
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
