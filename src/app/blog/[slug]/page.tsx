import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
};

const posts: BlogPost[] = [
  {
    slug: "mi-primer-post",
    title: "Mi primer post",
    excerpt:
      "Un vistazo rápido a cómo empecé este proyecto y qué vas a encontrar por aquí.",
  },
  {
    slug: "tips-de-tailwind",
    title: "Tips de Tailwind para tu día a día",
    excerpt:
      "Pequeños trucos para escribir clases más limpias y construir interfaces más rápido.",
  },
  {
    slug: "rutinas-de-aprendizaje",
    title: "Rutinas para aprender mejor",
    excerpt:
      "Ideas prácticas para mantener constancia y mejorar tu proceso de estudio.",
  },
  {
    slug: "mi-stack-favorito",
    title: "Mi stack favorito para proyectos personales",
    excerpt:
      "Herramientas y decisiones que suelo repetir cuando quiero iterar rápido sin complicarme.",
  },
  {
    slug: "como-me-organizo",
    title: "Cómo me organizo para trabajar desde casa",
    excerpt:
      "Consejos y herramientas que uso para mantenerme enfocado y productivo sin oficina.",
  },
  {
    slug: "errores-comunes",
    title: "Errores comunes al empezar con React",
    excerpt:
      "Una lista de errores que casi todos cometemos al principio y cómo evitarlos.",
  },
  {
    slug: "mejores-practicas-next",
    title: "Mejores prácticas con Next.js App Router",
    excerpt:
      "Tips para estructurar tu proyecto y aprovechar al máximo el App Router.",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  console.log("params.slug:", params.slug);
  const currentPost = posts.find((p) => p.slug === params.slug) || posts[0];
  console.log("currentPost:", currentPost);
  const relatedPosts = posts
    .filter((p) => p.slug !== currentPost.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MiSitio
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-10 sm:px-6">
        <section className="flex flex-col gap-6">
          <div
            className="aspect-4/3 w-full rounded-xl bg-black/5 dark:bg-white/5"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {currentPost.title}
            </h1>
            <p className="text-base leading-7 text-foreground/80 sm:text-lg">
              {currentPost.excerpt}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="space-y-4">
            <p className="text-base leading-7 text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-base leading-7 text-foreground/80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-base leading-7 text-foreground/80">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="text-base leading-7 text-foreground/80">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p className="text-base leading-7 text-foreground/80">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Posts relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <article
                key={post.slug}
                className="flex gap-4 rounded-xl border border-black/10 p-4 dark:border-white/10"
              >
                <div
                  className="h-16 w-16 flex-none rounded-lg bg-black/5 dark:bg-white/5"
                  aria-hidden="true"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/80">
                    {post.excerpt}
                  </p>
                  <div className="mt-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      Leer
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/80">
            © {new Date().getFullYear()} MiSitio. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              Twitter/X
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              TikTok
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
