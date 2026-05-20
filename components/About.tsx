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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-4xl border border-[#94c5de]/20 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-slate-950">
            <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
              Sobre mim
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[#0c2a3d]">
              Eu apoio seu caminho para mais clareza e equilíbrio.
            </h2>
            <p className="text-[#0c2a3d]/90 leading-8">
              Sou psicólogo com foco em atender pessoas que buscam reduzir
              ansiedade, melhorar relacionamentos e fortalecer o
              autoconhecimento.
            </p>
            <p className="text-[#0c2a3d]/90 leading-8">
              Minhas sessões são planejadas para oferecer acolhimento e
              ferramentas práticas, para que você sinta mais confiança nas
              escolhas do dia a dia.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-4xl shadow-2xl border border-[#94c5de]/15 bg-white/5 backdrop-blur-3xl">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                alt="Foto do psicólogo"
                width={1000}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
