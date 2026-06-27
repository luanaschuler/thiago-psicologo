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
          backgroundImage: "url(/howareyou.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* Coluna esquerda: imagem */}
          <div className="flex justify-center items-center">
            <div className="w-full h-120 rounded-2xl overflow-hidden">
              <Image
                src="/howareyou.jpg"
                alt="Primeira sessão"
                width={430}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Coluna direita: texto */}
          <div className="flex flex-col justify-start">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0c2a3d]">
              COMO SÃO AS MINHAS SESSÕES?
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0c2a3d]">
              Como funciona a primeira sessão
            </h3>
            <p className="mt-4 text-[#0c2a3d] leading-7 text-justify">
              Vamos falar de um jeito bem simples. A primeira sessão de terapia
              é tipo como começar a assistir uma série nova. O psicólogo vai
              conhecendo os personagens, os desafios da trama e os objetivos da
              temporada. O(a) roteirista, que é você, vai contar o que te trouxe
              até ali, falar sobre sua rotina, suas queixas, pensamentos e
              emoções.
            </p>
            <p className="mt-4 text-[#0c2a3d] leading-7 text-justify">
              O psicólogo vai fazer perguntas pra montar o “mapa” da situação e
              tentar entender o que está ajudando ou atrapalhando essa trama.
              Não é como em uma “prova”, então não existem respostas certas ou
              erradas. O objetivo é entender as coisas. Também é um momento para
              conhecer como a terapia funciona e esclarecer dúvidas. No final,
              começamos a traçar um plano de trabalho.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
