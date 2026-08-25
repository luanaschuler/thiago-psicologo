"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/amei3.jpeg')", // Substitua pelo caminho da sua imagem de fundo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-4xl border border-[#94c5de]/20 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-slate-950">
            <p className="text-base uppercase tracking-[0.3em] text-[#5c8fa6] md:text-lg">
              Sobre mim
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[#5c8fa6] md:text-5xl">
              Eu apoio seu caminho para mais clareza e equilíbrio.
            </h2>
            <p className="text-[background]/90 leading-8">
              Sou psicólogo com foco em atender pessoas que buscam reduzir
              ansiedade, melhorar relacionamentos e fortalecer o
              autoconhecimento.
            </p>
            <p className="text-[background]/90 leading-8">
              Cada sessão é planejada para oferecer acolhimento e ferramentas
              práticas, ajudando você a desenvolver mais confiança nas escolhas
              do dia a dia e a se fortalecer para enfrentar os desafios da vida
            </p>
            <Image
              src="/Ativo_20.svg"
              alt="logo"
              width={350}
              height={350}
              className="inline-block mt-4"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-120 w-full max-w-md overflow-hidden rounded-4xl shadow-2xl border border-[#94c5de]/15 bg-white/5 backdrop-blur-3xl">
              <Image
                src="/amei3.jpeg"
                alt="Foto do psicólogo"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
