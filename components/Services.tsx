"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      className="bg-gray-100 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meus Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Terapia Individual",
            "Terapia de Casal",
            "Ansiedade & Depressão",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-sm hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-medium mb-2">{item}</h3>
              <p className="text-gray-500">Descrição do serviço.</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
