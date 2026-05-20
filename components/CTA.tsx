"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    "Como funciona a terapia?",
    "Qual o valor das sessões?",
    "Atendimento é online ou presencial?",
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-8">Dúvidas Frequentes</h2>

        {faqs.map((q, i) => (
          <div key={i} className="border-b py-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-medium"
            >
              {q}
            </button>

            {open === i && (
              <p className="text-gray-500 mt-2">Resposta da pergunta aqui.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
