"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "terapia-emocional",
    title: "Terapia emocional para o seu equilíbrio",
    excerpt:
      "Entenda como a terapia emocional pode transformar sua relação com ansiedade e autoconfiança.",
    image: "/orange_cat.jpg",
  },
  {
    slug: "autoconhecimento",
    title: "Autoconhecimento e novas perspectivas",
    excerpt:
      "Descubra formas práticas de olhar para si mesmo e fortalecer sua autoestima.",
    image:
      "/sunset.jpg",
  },
  {
    slug: "relacionamentos",
    title: "Apoio para relacionamentos mais saudáveis",
    excerpt:
      "Aprenda a construir vínculos mais conscientes e equilibrados em sua vida pessoal.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Blog() {
  return (
    <motion.section
      id="blog"
      className="py-24 bg-[#e5f3f1]/70"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl bg-[#e5f3f1] px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
            Blog
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0c2a3d]">
            Artigos para apoiar seu processo
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={`/articles/${article.slug}`}
                className="group overflow-hidden rounded-4xl border border-[#94c5de]/40 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={900}
                    height={520}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0c2a3d]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[#0c2a3d]/90">{article.excerpt}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#f1972e]">
                    Ler artigo →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
