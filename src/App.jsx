import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, Mail, Menu, Moon, Phone, Sparkles, Star, Sun, X } from 'lucide-react'
import {
  hero,
  stats,
  story,
  skills as skillsData,
  experiences,
  projects,
  education,
} from './data'

const Pill = ({ children }) => (
  <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-ink/80 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">
    {children}
  </span>
)

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mb-6 space-y-2">
    <p className="text-xs uppercase tracking-[0.28em] text-slate">{eyebrow}</p>
    <h2 className="font-display text-3xl font-semibold text-ink">{title}</h2>
    {desc && <p className="max-w-2xl text-sm text-slate/90">{desc}</p>}
  </div>
)

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
  return (
    <header className="sticky top-0 z-40 w-full">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 transition-all ${
          scrolled ? 'backdrop-blur-md glass shadow-soft border border-black/5 rounded-2xl mt-2' : 'glass shadow-soft border border-transparent rounded-2xl mt-3'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/80 to-accentSoft/80 shadow-glow" />
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate">Portfolio</p>
            <p className="font-display text-lg font-semibold text-ink">Salman Mohammed</p>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate md:flex">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-ink">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center rounded-full border border-black/20 px-3 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:bg-black/5 md:inline-flex"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen((p) => !p)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl px-6 md:hidden">
          <div className="glass rounded-2xl border border-black/5 p-4 shadow-soft">
            <div className="grid gap-3">
              {links.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-ink hover:text-accent"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-ink hover:text-accent"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-16 pt-14 sm:pt-20">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(74,222,128,0.12),transparent_35%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate shadow-soft">
            <Sparkles className="h-4 w-4 text-accent" />
            Building calm AI
          </div>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">{hero.name}</h1>
          <p className="text-lg font-semibold text-slate">{hero.title}</p>
          <p className="max-w-2xl text-lg text-slate/90">{hero.summary}</p>
          <div className="flex flex-wrap items-center gap-3">
            {hero.focus.split('·').map((chip) => (
              <Pill key={chip}>{chip.trim()}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={hero.primaryCta}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={hero.secondaryCta}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.12),transparent_40%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-ink shadow-sm">
                <Star className="h-4 w-4 text-accent" />
                Production-ready ML and LLM systems shipped with monitoring.
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">Recent focus</p>
                  <ul className="mt-2 space-y-2 text-sm text-ink/80">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Building retrieval-augmented systems with vector databases and LLM orchestration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Designing agentic workflows using LangChain/LlamaIndex for real-world use cases
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Developing multi-agent assistants for travel, finance, and enterprise operations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Implementing role-aware and context-grounded conversational systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Creating fast, reliable AI features that run smoothly in production environments
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">Delivery</p>
                  <ul className="mt-2 space-y-2 text-sm text-ink/80">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      FastAPI + Docker with CI/CD for LLM/RAG services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      AWS Lambda/API Gateway/EKS · KServe deployments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      GCP Gemini/Vertex AI, Supabase/Stripe integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl border border-black/5 p-4 text-center shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate">{stat.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="pb-14 pt-2">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="About" title="About Me" />
        <div className="glass rounded-3xl border border-black/5 p-8 shadow-soft">
          <div className="grid gap-4 text-lg leading-relaxed text-slate/90">
            {story.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Skills" title="AI Systems Toolkit" />
        <div className="grid gap-6 md:grid-cols-2">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="glass rounded-2xl border border-black/5 p-6 shadow-soft"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Experience" title="Where I’ve built and shipped" />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="glass rounded-2xl border border-black/5 p-6 shadow-soft">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
                  <p className="text-sm font-semibold text-slate">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-slate/80">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate/90">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const [tab, setTab] = useState('featured')
  return (
    <section id="projects" className="pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Projects" title="Product-grade case studies" />
        <div className="mb-4 inline-flex rounded-xl border border-black/10 bg-white/80 p-1 shadow-soft">
          <button
            onClick={() => setTab('featured')}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === 'featured' ? 'bg-ink text-white shadow-soft' : 'text-ink hover:text-accent'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setTab('more')}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === 'more' ? 'bg-ink text-white shadow-soft' : 'text-ink hover:text-accent'
            }`}
          >
            More
          </button>
        </div>
        {tab === 'featured' && (
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-white via-white/95 to-accent/6 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
                    <p className="mt-2 text-sm text-slate/90">{project.summary}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status && (
                      <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate">
                        {project.status}
                      </span>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition hover:border-accent hover:text-accent"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold text-slate">
                        Private
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'more' && rest.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((project) => (
              <div
                key={project.name}
                className="glass rounded-2xl border border-black/5 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                    <p className="mt-1 text-sm text-slate/90">{project.summary}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status && (
                      <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate">
                        {project.status}
                      </span>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink transition hover:border-accent hover:text-accent"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold text-slate">
                        Private
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Education" title="Academic foundation" />
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.school} className="glass rounded-2xl border border-black/5 p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">{edu.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{edu.school}</h3>
              <p className="text-sm font-medium text-slate">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-white to-white p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.26em] text-slate">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">Let’s Build Together</h2>
          <p className="mt-2 text-sm text-slate/90">
            Interested in building intelligent, production-ready AI? I specialize in LLM tools, agent orchestration,
            and grounded RAG pipelines. Let’s connect.
          </p>
          <div className="mt-4">
            <a
              href="mailto:salman.dev@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              📧 Reach out →
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href="mailto:salmanmohammed2018@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/80 p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              <Mail className="h-5 w-5 text-accent" />
              salmanmohammed2018@gmail.com
            </a>
            <a
              href="tel:+16465138347"
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/80 p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" />
              646-513-8347
            </a>
            <a
              href="https://github.com/salmanmd18"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/80 p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              <Github className="h-5 w-5 text-accent" />
              github.com/salmanmd18
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-6 text-sm text-slate">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 sm:flex-row sm:items-center">
        <span>Salman Mohammed · {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 rounded-full bg-ink px-4 py-3 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}
