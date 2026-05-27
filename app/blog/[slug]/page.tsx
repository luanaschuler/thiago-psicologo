import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Query para buscar apenas o artigo que bate com a URL (slug) atual
const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  description,
  publishedAt,
  body,
  "imageUrl": image.asset->url
}`;

export default async function PostPage({ params }: PostPageProps) {
  // No Next.js (App Router), os params devem ser aguardados (awaited)
  const { slug } = await params;

  // Faz a busca passando o slug como variável de proteção contra injeção de código
  const post = await client.fetch(SINGLE_POST_QUERY, { slug });

  // Se o cliente digitar uma URL de post que não existe, joga para a página 404 padrão
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white py-20 text-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            &larr; Voltar para todos os artigos
          </Link>
        </nav>

        <header className="mb-8">
          <span className="text-sm font-medium text-slate-500">
            Publicado em{" "}
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              dateStyle: "long",
            })}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mt-2 text-slate-950">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 mt-4 leading-relaxed">
            {post.description}
          </p>
        </header>

        {post.imageUrl && (
          <div className="w-full h-96 rounded-2xl overflow-hidden bg-slate-100 mb-12 shadow-xs">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* O TEXTO RICO DO CLIENTE RENDERIZADO AQUI */}
        {/* Usamos classes de espaçamento e tipografia nativas do Tailwind v4 */}
        <div
          className="max-w-none text-slate-800 space-y-6 text-lg leading-relaxed 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-2
          [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-2
          [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6
          [&>a]:text-indigo-600 [&>a]:underline hover:[&>a]:text-indigo-500"
        >
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}
