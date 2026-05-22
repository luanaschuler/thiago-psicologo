"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a terapia?",
      answer:
        "A terapia é um espaço seguro para explorar suas emoções. Trabalhamos com escuta ativa e estratégias para transformar padrões que causam sofrimento.",
    },
    {
      question: "Qual o valor das sessões?",
      answer:
        "Os valores variam de acordo com tipo de atendimento. Entre em contato para receber opções de pacotes e horários disponíveis.",
    },
    {
      question: "Atendimento é online ou presencial?",
      answer:
        "Ofereço atendimento tanto online quanto presencial, dependendo da sua preferência e do melhor formato para seu processo.",
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
          <p className="text-sm uppercase tracking-[0.3em] text-[#94c5de]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#e5f3f1]">
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
