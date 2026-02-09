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

export default function BlogPage() {
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1, 7);

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

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 sm:px-6">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div
            className="aspect-4/3 w-full rounded-xl bg-black/5 dark:bg-white/5"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              {featuredPost.title}
            </h1>
            <p className="text-sm leading-6 text-foreground/80">
              {featuredPost.excerpt}
            </p>
            <div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
              >
                Leer más
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {gridPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col gap-4 rounded-xl border border-black/10 p-6 dark:border-white/10"
            >
              <div
                className="aspect-square w-full rounded-lg bg-black/5 dark:bg-white/5"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {post.title}
                </h3>
                <p className="text-sm leading-6 text-foreground/80">
                  {post.excerpt}
                </p>
                <div className="mt-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
