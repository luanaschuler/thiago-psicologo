import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-[#5c8fa6]/15 bg-[#0c2a3d]/10 text-[#e5f3f1]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/Ativo_21.svg"
            alt="logo"
            width={150}
            height={150}
            className="inline-block mt-4"
          />
          <p className="mt-2 max-w-md text-sm text-[#0c2a3d]">
            Atendimento humanizado para seu crescimento emocional e bem-estar.
          </p>
        </div>
        <Image
          src="/Ativo_3.svg"
          alt="logo"
          width={150}
          height={150}
          className="inline-block mt-4"
        />
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-[#0c2a3d]">
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
            <Link href="#contato" className="transition hover:text-white">
              Contato
            </Link>
          </div>

          <div>
            <Link
              href="#contato"
              className="mt-2 inline-flex rounded-full bg-[#f1972e] px-6 py-3 text-sm font-semibold text-[#0c2a3d] transition hover:bg-[#d58224]"
            >
              Quero agendar uma sessão
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mt-6 border-t border-[#0c2a3d]/10 pt-6 text-center text-sm text-[#0c2a3d]">
          <span>
            © {new Date().getFullYear()} Todos os direitos reservados.
            Desenvolvido por{" "}
          </span>
          <Link href="/luana" className="text-[#0c2a3d] font-semibold underline">
            Luana Schuler
          </Link>
        </div>
      </div>
    </footer>
  );
}
