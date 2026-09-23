"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0c2a3d] text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {" "}
      {/* Vídeo de fundo */}{" "}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {" "}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-100 scale-105 transform filter contrast-110 saturate-110"
          src="/maybe_thiago.mp4"
        />{" "}
      </div>{" "}
      {/* Overlay */}{" "}
      <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-r from-[#0c2a3d]/90 via-[#0c2a3d]/50 to-transparent" />{" "}
      {/* Transição branca */}{" "}
      <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />{" "}
      {/* Conteúdo */}{" "}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-6 pt-32 lg:pt-0">
        {" "}
        {/* GLASS CARD */}{" "}
        <div className=" relative w-full rounded-4xl bg-white/3 border border-[#94c5de]/10 backdrop-blur-2xl shadow-2xl px-4 pt-4 pb-3 sm:px-5 lg:px-8 lg:pt-0 lg:pb-0 ">
          {" "}
          {/* GRID */}{" "}
          <div className=" grid w-full items-end grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0 ">
            {" "}
            {/* FOTO */}{" "}
            <div className=" relative z-10 mx-auto w-full max-w-[260px] overflow-hidden rounded-4xl shadow-xl sm:max-w-[280px] lg:mx-0 lg:max-w-[385px] lg:-mt-28 lg:translate-x-8 ">
              {" "}
              <Image
                src="/joia3.jpeg"
                alt="Atendimento psicológico"
                width={450}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative h-auto w-full object-cover"
                priority
              />{" "}
            </div>{" "}
            {/* TEXTO */}{" "}
            <div className=" relative z-20 w-full md:pr-0 lg:-translate-x-4 ml-17">
              {" "}
              <div className="w-full max-w-none sm:max-w-[520px] md:max-w-[520px] lg:max-w-[650px]">
                {" "}
                {/* TÍTULO */}{" "}
                <div className="text-left font-black uppercase leading-[0.8] tracking-[-0.06em] text-[#f1972e] font-family-[New Title]">
                  {" "}
                  <div className="flex items-end justify-start gap-1 sm:gap-2 md:gap-3">
                    {" "}
                    <span className="mb-1 block whitespace-nowrap text-[clamp(1.7rem,7vw,3.2rem)] [@media(min-width:425px)]:text-[2.4rem] [@media(min-width:768px)]:text-[4.8rem] sm:text-[clamp(3.2rem,7vw,8.5rem)]">
                      {" "}
                      KEEP CALM{" "}
                    </span>{" "}
                    <Image
                      src="/Ativo_3.svg"
                      alt="Ícone Keep Calm"
                      width={120}
                      height={120}
                      className="mb-1 h-auto w-[18px] [@media(min-width:425px)]:w-[2.2rem] [@media(min-width:768px)]:w-[4.5rem] [@media(max-width:375px)]:w-[1.7rem] sm:w-[38px] md:w-[70px] lg:w-[82px]"
                    />{" "}
                  </div>{" "}
                  <span className="mb-2 block whitespace-nowrap text-[clamp(2rem,8vw,4.2rem)] [@media(min-width:425px)]:text-[2.8rem] [@media(min-width:768px)]:text-[4.1rem] [@media(max-width:375px)]:text-[1.9rem] sm:text-[clamp(3.7rem,3vw,9rem)] lg:text-[clamp(4.3rem,5.2vw,9rem)]">
                    {" "}
                    E FAÇA TERAPIA{" "}
                  </span>{" "}
                </div>{" "}
                {/* TEXTO */}{" "}
                <div className="relative z-20 pt-4 text-left sm:pt-5 md:pt-6 lg:pt-8">
                  {" "}
                  <h1 className="mb-3 text-lg font-semibold leading-tight text-[#0c2a3d] [@media(min-width:425px)]:text-[1.25rem] [@media(min-width:768px)]:text-[1.9rem] sm:text-2xl md:text-3xl font-family-[New Title]">
                    {" "}
                    Atendimento psicológico focado na sua saúde mental, com
                    acolhimento e mudança real{" "}
                  </h1>{" "}
                  <p className="mt-2 max-w-none whitespace-normal text-xs text-[#0c2a3d]/90 [@media(min-width:425px)]:text-[0.8rem] [@media(min-width:768px)]:text-[1rem] sm:max-w-lg sm:text-sm">
                    {" "}
                    Um olhar profissional e humano para apoiar sua evolução com
                    empatia e clareza{" "}
                  </p>{" "}
                  <div className="mt-4 flex justify-start sm:justify-end">
                    {" "}
                    <a
                      href="#contato"
                      className="mb-2 inline-flex rounded-full bg-[#f1972e] px-4 py-2 text-xs font-semibold text-[#0c2a3d] transition hover:bg-[#d58224] sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                      {" "}
                      Agendar sessão{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.section>
  );
}
