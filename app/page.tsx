import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Charism from "@/components/Charism";
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
      <Charism />
      <FAQ />
      <Footer />
    </main>
  );
}
