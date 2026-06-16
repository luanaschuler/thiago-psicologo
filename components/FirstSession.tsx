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
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
          {/* Coluna esquerda: imagem + título + primeiro parágrafo */}
          <div className="flex flex-col items-center md:items-start rounded-2xl p-4 md:p-8">
            <div className="w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center mb-6">
              <Image
                src="/orange_cat.jpg"
                alt="Gato laranja"
                width={430}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
              Primeira sessão
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0c2a3d]">
              Como funciona a primeira sessão
            </h3>
            <p className="mt-4 text-[#0c2a3d] leading-7">
              Vamos falar de um jeito bem simples. A primeira sessão de terapia
              é tipo como começar a assistir uma série nova. O psicólogo vai
              conhecendo os personagens, os desafios da trama e os objetivos da
              temporada. O(a) roteirista, que é você, vai contar o que te trouxe
              até ali, falar sobre sua rotina, suas queixas, pensamentos e
              emoções.
            </p>
          </div>

          {/* Coluna do meio: continuação do texto (parte 1) */}
          <div className="flex flex-col">
            <p className="mt-0 md:mt-4 text-[#0c2a3d] leading-7">
              O psicólogo vai fazer perguntas pra montar o “mapa” da situação e
              tentar entender o que está ajudando ou atrapalhando essa trama.
              Não é como em uma “prova”, então não existem respostas certas ou
              erradas. O objetivo é entender as coisas. Também é um momento para
              conhecer como a terapia funciona e esclarecer dúvidas. No final,
              começamos a traçar um plano de trabalho. Depois desse primeiro
              episódio, começa o trabalho mais intenso - ou a temporada
              principal da série. Nós vamos investigar a natureza das suas
              queixas, os fatores que mantém os problemas e buscaremos
              compreender os fatores que às vezes parecem estar dirigindo a
              história sem pedir autorização.
            </p>
          </div>

          {/* Coluna direita: continuação (parte 2) + lista + imagem */}
          <div className="flex flex-col">
            <p className="mt-0 md:mt-4 text-[#0c2a3d] leading-7">
              A cada sessão, nós tentaremos identificar padrões, testaremos
              hipóteses e estratégias e avaliaremos o que funciona melhor na
              vida real. Poderemos usar exercícios e desafios entre os encontros
              (nada como um “trabalho de faculdade”. São apenas pequenas
              experiências para colocar em prática o que foi discutido). Com o
              tempo, você vai desenvolvendo e aprimorando ferramentas pra lidar
              melhor com as suas dificuldades e aprendendo a tomar decisões mais
              alinhadas com os seus valores e objetivos. A meta é que, aos
              poucos, você se torne cada vez mais o(a) protagonista da própria
              história e menos refém dos “roteiros automáticos” da mente.
            </p>

            <ul className="mt-6 space-y-2 text-[#0c2a3d]">
              <li>• Conversa inicial sobre queixas e histórico</li>
              <li>• Definição de objetivos e próximos passos</li>
              <li>• Esclarecimento sobre frequência e valores</li>
            </ul>

            <div className="w-full h-48 rounded-2xl overflow-hidden mt-6">
              <Image
                src="/orange_cat.jpg"
                alt="Gato laranja"
                width={430}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
