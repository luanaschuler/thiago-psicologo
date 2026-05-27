import { client } from "@/sanity/client";
import Link from "next/link";

// 1. Criamos a interface para explicar ao TypeScript o que é um Post
interface Post {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  imageUrl: string | null;
}

const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  "imageUrl": image.asset->url
}`;

export const revalidate = 3600;

export default async function BlogPage() {
  // 2. Avisamos ao fetch que ele vai receber um array de objetos do tipo Post
  const posts = await client.fetch<Post[]>(ALL_POSTS_QUERY);

  return (
    <div className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            &larr; Voltar para a Home
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-4">
            Todos os Artigos
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Explore a lista completa de publicações e reflexões abaixo.
          </p>
        </header>

        <div className="space-y-8">
          {/* 3. Agora o TypeScript sabe exatamente o que é o 'post' e o erro some! */}
          {posts.map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200"
            >
              {post.imageUrl && (
                <div className="w-full md:w-64 h-44 shrink-0 rounded-xl overflow-hidden relative bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="flex flex-col justify-center">
                <span className="text-sm text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    dateStyle: "long",
                  })}
                </span>

                <h2 className="text-2xl font-bold mt-2 group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0 rounded-2xl" />
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-slate-600 text-base line-clamp-2">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
