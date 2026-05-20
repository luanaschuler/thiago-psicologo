"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Atenção emocional",
    description:
      "Sessões focadas em ouvir, acolher e construir um plano de cuidado individual.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Autoconhecimento",
    description:
      "Estratégias para fortalecer sua autoestima e tomar decisões mais confiantes.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gestão de ansiedade",
    description:
      "Ferramentas práticas para encontrar equilíbrio e reduzir o impacto do estresse.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Apoio a relacionamentos",
    description:
      "Conversas terapêuticas que melhoram a comunicação e os vínculos pessoais.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function FeatureGrid() {
  return (
    <motion.section
      id="servicos"
      className="bg-[#e5f3f1]/90 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
            O que eu ofereço
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0c2a3d]">
            Abordagem humana em cada atendimento
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#94c5de]/40 bg-white shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={440}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-[#0c2a3d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#0c2a3d]/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
