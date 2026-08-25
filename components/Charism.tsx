"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Charism() {
  return (
    <motion.section
      className="relative py-8 bg-[#e5f3f1]/60"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] items-center rounded-4xl border border-[#94c5de]/30 bg-[url('/three.jpg')] bg-cover bg-center p-8 shadow-2xl">
          <div className="self-end rounded-4xl border border-[#94c5de]/20 bg-white/5 p-10 backdrop-blur-3xl">
            <p className="text-base uppercase tracking-[0.3em] text-[#0c2a3d] md:text-lg">
              Conexão e acolhimento
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#94c5de] md:text-5xl">
              Um espaço para ver, ouvir e transformar.
            </h2>
            <p className="mt-6 text-[#e5f3f1]/90 leading-8">
              Atendimento pensado para trazer clareza aos seus sentimentos e
              criar uma rotina emocional mais tranquila.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex rounded-full bg-[#f1972e] px-6 py-3 text-sm font-semibold text-[#0c2a3d] transition hover:bg-[#d58224]"
            >
              Quero agendar uma sessão
            </a>
          </div>
          <div className="overflow-hidden rounded-4xl shadow-2xl">
            <Image
              src="/joia1.jpeg"
              alt="Psicólogo em atendimento"
              width={950}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
