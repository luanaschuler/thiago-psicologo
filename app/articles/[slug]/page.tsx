import Link from "next/link";

const articles = {
  "terapia-emocional": {
    title: "Terapia emocional para encontrar equilíbrio",
    description:
      "Conheça como a terapia emocional pode ajudá-lo a lidar com sentimentos intensos e restaurar sua qualidade de vida.",
    content:
      "A terapia emocional oferece espaço seguro para explorar pensamentos, emoções e padrões. Juntos, construímos novas formas de enfrentar ansiedade, estresse e conflitos pessoais, criando um caminho para mais tranquilidade no cotidiano.",
  },
  autoconhecimento: {
    title: "Autoconhecimento como ferramenta de transformação",
    description:
      "Um processo de autodescoberta que fortalece sua segurança e ajuda você a tomar decisões mais conscientes.",
    content:
      "Por meio de exercícios reflexivos, identificamos crenças limitantes, valores pessoais e recursos internos. Assim, você passa a agir com mais clareza e confiança em sua vida emocional e profissional.",
  },
  relacionamentos: {
    title: "Apoio para seus relacionamentos",
    description:
      "Melhore a comunicação e fortalecimento dos seus vínculos com intervenções focadas nas suas necessidades.",
    content:
      "O trabalho terapêutico com relacionamentos ajuda a reconhecer padrões de convivência, lidar com conflitos e construir relações mais saudáveis. O foco é criar conexão, respeito e empatia entre você e as pessoas que importam.",
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 py-24 px-6 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-semibold">Artigo não encontrado</h1>
          <p className="mt-4 text-slate-600">
            O artigo solicitado não está disponível. Volte para a página
            principal.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(16,185,129,0.15), transparent 45%)",
        }}
      >
        <div className="mx-auto max-w-5xl rounded-4xl border border-slate-200 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <Link
            href="/"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            ← Voltar para a página inicial
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">{article.description}</p>
          <div className="mt-10 text-lg leading-8 text-slate-700">
            <p>{article.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
