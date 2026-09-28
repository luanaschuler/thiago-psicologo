"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Atenção emocional",
    description:
      "Sessões focadas em ouvir, acolher e construir um plano de cuidado individual.",
    image: "/therapy.jpg",
  },
  {
    title: "Autoconhecimento",
    description:
      "Estratégias para fortalecer sua autoestima e tomar decisões mais confiantes.",
    image: "/theshire.jpg",
  },
  {
    title: "Gestão de ansiedade",
    description:
      "Ferramentas práticas para encontrar equilíbrio e reduzir o impacto do estresse.",
    image: "/kittens.jpg",
  },
  {
    title: "Apoio a relacionamentos",
    description:
      "Conversas terapêuticas que melhoram a comunicação e os vínculos pessoais.",
    image: "/therapy2.jpg",
  },
  {
    title: "Atendimento personalizado",
    description: "Acolhimento direcionado à demanda de cada paciente.",
    image: "/mountains.jpg",
  },
  {
    title: "Saúde emocional",
    description:
      "Cuidado emocional para lidar com desafios, compreender sentimentos e viver com mais equilibrio.",
    image: "/orange_cat.jpg",
  },
];

export default function FeatureGrid() {
  return (
    <motion.section
      id="servicos"
      className="bg-white/30 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-base uppercase tracking-[0.3em] text-[#5c8fa6] md:text-2xl">
            O que eu ofereço
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#0c2a3d] md:text-5xl">
            Abordagem humana em cada atendimento
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex h-[420px] flex-col overflow-hidden rounded-3xl border border-[#94c5de]/40 bg-white shadow-lg ${
                  index === items.length - 1
                    ? "md:justify-self-center lg:justify-self-auto"
                    : ""
                }`}
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
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-3xl font-semibold text-[#0c2a3d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-justify text-[#0c2a3d]/90">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
