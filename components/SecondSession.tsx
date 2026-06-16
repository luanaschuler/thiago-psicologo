"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SecondSession() {
  return (
    <motion.section
      id="segunda-sessao"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 overflow-hidden"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Blurred background overlay similar to FirstSession */}
      <div
        className="absolute inset-0 blur-md opacity-80"
        style={{
          backgroundImage: "url(/smile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* Coluna esquerda: parágrafos 2 e 3 */}
          <div className="flex flex-col rounded-2xl p-4 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
              Sobre a sessão
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0c2a3d]">
              O que acontece após a primeira sessão
            </h3>

            <p className="mt-4 text-[#0c2a3d] leading-7 text-justify">
              Depois desse primeiro episódio, começa o trabalho mais intenso -
              ou a temporada principal da série. Nós vamos investigar a natureza
              das suas queixas, os fatores que mantém os problemas e buscaremos
              compreender os fatores que às vezes parecem estar dirigindo a
              história sem pedir autorização. A cada sessão, nós tentaremos
              identificar padrões, testaremos hipóteses e estratégias e
              avaliaremos o que funciona melhor na vida real.
            </p>

            <p className="mt-4 text-[#0c2a3d] leading-7 text-justify">
              Poderemos usar exercícios e desafios entre os encontros (nada como
              um “trabalho de faculdade”. São apenas pequenas experiências para
              colocar em prática o que foi discutido).
            </p>
            <p className="mt-4 text-[#0c2a3d] leading-7 text-lg font-semibold text-justify">
              Com o tempo, você vai desenvolvendo e aprimorando ferramentas pra
              lidar melhor com as suas dificuldades e aprendendo a tomar
              decisões mais alinhadas com os seus valores e objetivos. A meta é
              que, aos poucos, você se torne cada vez mais o(a) protagonista da
              própria história e menos refém dos “roteiros automáticos” da
              mente.
            </p>
          </div>

          {/* Coluna direita: imagem */}
          <div className="flex items-center justify-center md:justify-end rounded-2xl p-4 md:p-8">
            <div className="w-full h-120 rounded-2xl overflow-hidden">
              <Image
                src="/smile.jpg"
                alt="Imagem sessões"
                width={950}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
