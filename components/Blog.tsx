import Link from "next/link";
import { client } from "@/sanity/client";

// 1. Criamos a interface idêntica para manter a consistência dos dados
interface Post {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  imageUrl: string | null;
}

// Busca estruturada: Pega posts, ordena por data decrescente e limita de 0 a 2 (3 posts)
const HOME_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0..2]{
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  "imageUrl": image.asset->url
}`;

export default async function HomePage() {
  // 2. Passamos a tipagem <Post[]> aqui no fetch do Sanity
  const posts = await client.fetch<Post[]>(HOME_POSTS_QUERY);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-20">
      {/* Seção do Blog na Home */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
              Últimas Publicações
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Confira os artigos e novidades compartilhados recentemente.
            </p>
          </div>

          {/* O BOTÃO SOLICITADO: Leva para a página de todos os artigos */}
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-950 text-white font-medium hover:bg-slate-800 transition-colors duration-200 shadow-xs"
          >
            Ver todos os artigos
          </Link>
        </div>

        {/* Grid dos 3 Artigos com Tailwind v4 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 3. Removemos o :any. Agora o mapeamento está 100% seguro */}
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Imagem de Capa */}
              <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Textos do Card */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-sm text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    dateStyle: "long",
                  })}
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 flex-1 text-base text-slate-600 line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1"
                  >
                    Ler artigo <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
