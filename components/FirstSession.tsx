"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FirstSession() {
  return (
    <motion.section
      id="primeira-sessao"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 overflow-hidden"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 blur-md opacity-80"
        style={{
          backgroundImage: "url(/orange_cat.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center md:justify-start rounded-2xl p-8">
            <div className="w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/orange_cat.jpg"
                alt="Gato laranja"
                width={430}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
              Primeira sessão
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0c2a3d]">
              Como funciona a primeira sessão
            </h3>
            <p className="mt-4 text-[#0c2a3d] leading-7">
              A primeira sessão é um encontro para conhecermos sua história,
              entender suas expectativas e identificar objetivos para o
              acompanhamento. Normalmente dura entre 45 e 60 minutos e é um
              espaço seguro e acolhedor.
            </p>

            <ul className="mt-4 space-y-2 text-[#0c2a3d]">
              <li>• Conversa inicial sobre queixas e histórico</li>
              <li>• Definição de objetivos e próximos passos</li>
              <li>• Esclarecimento sobre frequência e valores</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
