import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import About from "@/components/About";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-50 text-slate-950">
      <NavBar />
      <Hero />
      <FeatureGrid />
      <About />
      <Blog />

      <section className="relative py-24 bg-[#e5f3f1]/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] items-center rounded-4xl border border-[#94c5de]/30 bg-[url('https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-8 shadow-2xl">
            <div className="rounded-4xl border border-[#94c5de]/20 bg-white/5 p-10 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5c8fa6]">
                Conexão e acolhimento
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-[#0c2a3d]">
                Um espaço para ver, ouvir e transformar.
              </h2>
              <p className="mt-6 text-[#0c2a3d]/90 leading-8">
                Atendimento pensado para trazer clareza aos seus sentimentos e
                criar uma rotina emocional mais tranquila.
              </p>
              <a
                href="#contato"
                className="mt-8 inline-flex rounded-full bg-[#f1972e] px-6 py-3 text-sm font-semibold text-[#0c2a3d] transition hover:bg-[#d58224]"
              >
                Quero agendar uma sessão
              </a>
            </div>
            <div className="overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=950&q=80"
                alt="Psicólogo em atendimento"
                width={950}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
