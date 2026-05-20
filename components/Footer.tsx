import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-[#5c8fa6]/15 bg-[#0c2a3d] text-[#e5f3f1]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Psicólogo</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Atendimento humanizado para seu crescimento emocional e bem-estar.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[#94c5de]">
          <Link href="#home" className="transition hover:text-white">
            Início
          </Link>
          <Link href="#sobre" className="transition hover:text-white">
            Sobre
          </Link>
          <Link href="#blog" className="transition hover:text-white">
            Blog
          </Link>
          <Link href="#faq" className="transition hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
