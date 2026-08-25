"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "Que abordagem eu utilizo?",
      answer:
        "Em meus atendimentos, utilizo a Terapia Cognitivo Comportamental (TCC). De uma forma resumida, entendemos que os nossos pensamentos, sentimentos e comportamentos estão interligados. A TCC busca auxiliar o(a) paciente a identificar e reestruturar padrões disfuncionais, transformando positivamente suas emoções e comportamentos.",
    },
    {
      question: "Que tipos de demanda eu atendo?",
      answer:
        "Ao longo dos anos, venho oferecendo acolhimento para demandas diversas, as quais envolvem sofrimento emocional, problemas de relacionamento, desejo de mudança de comportamentos, desenvolvimento de habilidades de comunicação, sexualidade, manejo do estresse e tomada de decisão, além, é claro, de auxiliar em demandas que envolvem diagnósticos dos mais diversos (ansiedade, depressão, entre outros).",
    },
    {
      question: "Qual a periodicidade dos atendimentos?",
      answer:
        "A periodicidade poderá variar de acordo com a necessidade e a natureza da demanda de cada paciente. Os atendimentos podem acontecer semanalmente, quinzenalmente ou mensalmente. Além disso, é possível fazer um combinado específico que se encaixe com a sua necessidade.",
    },
    {
      question: "Qual o valor das sessões?",
      answer:
        "Os valores variam de acordo com tipo de atendimento. Entre em contato para receber opções de pacotes e horários disponíveis, bem como informaçoes sobre planos de saúde.",
    },
    {
      question: "Quais grupos etários eu atendo?",
      answer:
        "Atendo adolescentes, adultos e idosos, com respeito à diversidade de identidades de gênero e orientações afetivo-sexuais.",
    },
    {
      question: "Atendimento é online ou presencial?",
      answer:
        "Ofereço atendimento tanto online quanto presencial, dependendo da sua preferência e do melhor formato para seu processo.",
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer:
        "Uma sessão de terapia tem um tempo de 50 minutos. Sendo assim, é muito importante que cada paciente se prepare no decorrer dos dias antes das sessões para que possa utilizar o tempo da maneira mais produtiva possível.",
    },
    {
      question: "Como posso agendar uma sessão?",
      answer:
        "Use o botão de agendamento no topo da página ou envie um contato por e-mail para reservar seu horário.",
    },
  ];

  return (
    <motion.section
      id="faq"
      className="relative py-24 bg-gradient-to-br from-[#0c2a3d] to-[#5c8fa6]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <p className="text-base uppercase tracking-[0.3em] text-[#94c5de] md:text-lg">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#e5f3f1] md:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Ativo_18.svg"
              alt="FAQ visual"
              width={360}
              height={360}
              className="h-auto w-full max-w-sm"
            />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-[#94c5de]/20 bg-white/3 backdrop-blur-2xl p-6 shadow-lg"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between text-left text-lg font-semibold text-[#e5f3f1]"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#f1972e]">
                    {open === index ? "−" : "+"}
                  </span>
                </button>
                {open === index && (
                  <p className="mt-3 text-[#e5f3f1]/80 leading-7">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
