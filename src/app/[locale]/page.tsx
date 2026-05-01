import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ArrowRight } from "lucide-react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiNodedotjs, SiSupabase, SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Image from "next/image";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");
  const footerT = await getTranslations("Footer");
  const projectsT = await getTranslations("Projects");
  const skillsT = await getTranslations("Skills");

  const skills = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: SiGithub }
  ];

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t("title")}</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full" />
              <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                {t("content")}
              </p>
              <div className="mt-10 pt-8 border-t border-border/50">
                <a 
                  href="https://soma-code-dev.github.io/" 
                  target="_blank" 
                  className="inline-flex items-center gap-4 group transition-all duration-300"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src="/images/Soma Code.png" 
                      alt="Soma Code Logo" 
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent block mb-0.5">Software House</span>
                    <p className="text-sm font-bold text-foreground/60 flex items-center group-hover:text-accent transition-colors">
                      Visit Website <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image 
                src="/images/YujiSeto.jpg" 
                alt="Rodrigo Yuji Seto Soma" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{projectsT("title")}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'WaniTracker', 
                tech: ['Next.js (App Router)', 'TypeScript', 'WaniKani API'], 
                github: 'https://github.com/YujiSeto/wani-tracker', 
                demo: 'https://wanitracker.vercel.app/',
                image: '/images/projects/wanitracker.png'
              },
              { 
                name: 'Y Network', 
                tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4'], 
                github: 'https://github.com/YujiSeto/y-network', 
                demo: 'https://y-yujiseto.vercel.app/home',
                image: '/images/projects/ynetwork.png'
              },
              { 
                name: 'Sushi Store', 
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'], 
                github: 'https://github.com/YujiSeto/sushi-store', 
                demo: 'https://yujiseto.github.io/sushi-store/',
                image: '/images/projects/sushistore.png'
              },
              { 
                name: 'WhatsApp Clone', 
                tech: ['React.js', 'Firebase', 'Mobile-First CSS'], 
                github: 'https://github.com/YujiSeto/whatsapp-clone', 
                demo: 'https://yujiseto.github.io/whatsapp-clone/',
                image: '/images/projects/whatsapp.png'
              }
            ].map((project) => (
              <div key={project.name} className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl hover:border-accent transition-all duration-500">
                <div className="aspect-video bg-gray-100 dark:bg-black flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/0 transition-colors duration-500 z-10" />
                   <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    priority={project.name === 'WaniTracker'}
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                   />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-secondary text-foreground/90 rounded-lg text-xs font-bold uppercase tracking-wider border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a href={project.demo} target="_blank" className="flex items-center text-sm font-black text-accent hover:underline uppercase tracking-wider group/link">
                      Live Demo <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href={project.github} target="_blank" className="flex items-center text-sm font-black text-foreground/60 hover:text-foreground uppercase tracking-wider transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{skillsT("title")}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-4 px-8 py-6 bg-card border border-border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <skill.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-lg font-bold text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-20 px-4 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-4 text-foreground tracking-tighter">yujiseto</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs font-medium italic">
              {footerT("tagline")}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="https://github.com/YujiSeto" target="_blank" className="p-3 bg-secondary rounded-full hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/yujiseto/" target="_blank" className="p-3 bg-secondary rounded-full hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:rodrigo.yuji.seto@gmail.com" className="p-3 bg-secondary rounded-full hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2026 YujiSeto. {footerT("rights")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
