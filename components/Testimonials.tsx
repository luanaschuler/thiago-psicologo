"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Fernanda G.",
    role: "Paciente",
    text: "Desde a primeira sessão me acolheu muito bem, me senti muito a vontade. Ele é extremante atencioso e preocupado com o bem estar do paciente. Sempre disponível em meio as minhas crises, me ajudando da melhor forma, até mesmo a distância. Só tenho a agradecer por todo cuidado e dedicação.",
  },
  {
    id: 2,
    name: "Gabriela P.",
    role: "Paciente",
    text: "Thiago é um excelente profissional, desde a primeira sessão foi extremamente respeitoso, atencioso e empático, me senti muito a vontade. Possui muito conhecimento e conduz as sessões de uma forma leve e tranquila, o que ajuda muito durante o processo terapêutico. Recomendo sem dúvidas!",
  },
  {
    id: 3,
    name: "Pamela R.",
    role: "Paciente",
    text: "Thiago é um excelente profissional, muito atencioso. As sessões são conduzidas de forma leve, acolhedora e sempre proporcionando resultados positivos. Recomendo com total confiança!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.section
      id="depoimentos"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-24 bg-transparent"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8 text-center">
          <p className="text-base uppercase tracking-[0.3em] text-[#5c8fa6] md:text-2xl">
            Depoimentos
          </p>
          <h2 className="text-4xl font-semibold text-[#0c2a3d] md:text-5xl">
            O que as pessoas dizem
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="w-full max-w-3xl h-[620px] md:h-[480px] flex flex-col rounded-4xl border border-[#0c2a3d]/70 bg-[#5c8fa6] p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-3xl">
            <div className="relative flex-1 min-h-0 flex items-center justify-center">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={t.id}
                  initial={false}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`${
                    i === index
                      ? "relative"
                      : "absolute inset-0 pointer-events-none"
                  } flex flex-col items-center justify-center overflow-y-auto w-full min-w-0 px-0 sm:px-2 text-center`}
                >
                  <p className="w-full min-w-0 break-words [overflow-wrap:anywhere] text-sm min-[375px]:text-base md:text-lg leading-7 md:leading-8 text-[#0c2a3d]">
                    “{t.text}”
                  </p>

                  <div className="mt-6 text-center shrink-0">
                    <div className="font-semibold text-[#0c2a3d]">{t.name}</div>
                    <div className="text-sm text-[#0c2a3d]/80">{t.role}</div>
                  </div>
                </motion.blockquote>
              ))}
            </div>

            <div className="mt-6 shrink-0 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Mostrar depoimento ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-8 rounded-full transition ${i === index ? "bg-[#f1972e]" : "bg-[#cbd5e1]"}`}
                />
              ))}
            </div>

            <div className="mt-8 shrink-0 border-t border-[#94c5de]/10 pt-6 text-center">
              <p className="text-sm text-[#0c2a3d]/90">
                Veja mais avaliações no Google
              </p>
              <a
                href="https://www.google.com/search?q=thiago+wanderweger&oq=thiago&gs_lcrp=EgZjaHJvbWUqCAgEEEUYJxg7MgYIABBFGDwyBggBEEUYOTINCAIQLhiDARixAxiABDIICAMQRRgnGDsyCAgEEEUYJxg7MgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEINTE3MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#0c2a3d] underline"
              >
                Ver avaliações no Google
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Image src="/Ativo_2.svg" alt="Separador" width={240} height={48} />
        </div>
      </div>
    </motion.section>
  );
}
