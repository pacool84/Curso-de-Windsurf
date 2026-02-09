import Link from "next/link";

type Project = {
  title: string;
  description: string;
};

type Talk = {
  title: string;
  excerpt: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Una descripción breve del proyecto y su propósito.",
  },
  {
    title: "Proyecto 2",
    description: "Una descripción breve del proyecto y su propósito.",
  },
  {
    title: "Proyecto 3",
    description: "Una descripción breve del proyecto y su propósito.",
  },
  {
    title: "Proyecto 4",
    description: "Una descripción breve del proyecto y su propósito.",
  },
];

const talks: Talk[] = [
  {
    title: "Charla 1",
    excerpt: "Un resumen corto de la charla y los temas principales.",
    href: "#",
  },
  {
    title: "Charla 2",
    excerpt: "Un resumen corto de la charla y los temas principales.",
    href: "#",
  },
];

export default function AboutPage() {
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
        <section className="rounded-xl border border-black/10 p-6 dark:border-white/10 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div
              className="aspect-square w-full rounded-xl bg-black/5 dark:bg-white/5"
              role="img"
              aria-label="Imagen de perfil (placeholder)"
            />

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold tracking-tight">
                About me
              </h1>
              <p className="text-sm leading-6 text-foreground/80">
                Soy una persona curiosa que disfruta construir productos
                digitales y explorar nuevas herramientas.
              </p>
              <p className="text-sm leading-6 text-foreground/80">
                Me interesa crear experiencias simples, accesibles y con
                atención al detalle.
              </p>
              <p className="text-sm leading-6 text-foreground/80">
                Comparto aprendizajes, proyectos y recursos para quienes están
                en el mismo camino.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col gap-4 rounded-xl border border-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/2 hover:shadow-lg dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/2"
              >
                <div
                  className="aspect-4/3 w-full overflow-hidden rounded-lg bg-black/5 dark:bg-white/5"
                  aria-hidden="true"
                >
                  <div
                    className="h-full w-full bg-black/5 transition-transform duration-300 group-hover:scale-105 dark:bg-white/5"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-6 text-foreground/80">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Talks</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {talks.map((talk) => (
              <article
                key={talk.title}
                className="flex flex-col gap-4 rounded-xl border border-black/10 p-4 dark:border-white/10 sm:flex-row"
              >
                <div
                  className="aspect-square w-full rounded-lg bg-black/5 dark:bg-white/5 sm:h-24 sm:w-24 sm:flex-none"
                  aria-hidden="true"
                />

                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="text-sm font-semibold tracking-tight">
                    {talk.title}
                  </h3>
                  <p className="text-sm leading-6 text-foreground/80">
                    {talk.excerpt}
                  </p>
                  <div className="mt-2">
                    <a
                      href={talk.href}
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      Ver charla
                    </a>
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
