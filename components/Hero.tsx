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
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-100 scale-105 transform filter contrast-110 saturate-110"
          src="/maybe_thiago.mp4"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-r from-[#0c2a3d]/90 via-[#0c2a3d]/50 to-transparent" />

      {/* Transição branca */}
      <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-end

          px-4
          pb-4
          pt-28

          sm:px-5
          sm:pb-5
          sm:pt-32

          lg:px-6
          lg:pb-6
          lg:pt-36

          2xl:max-w-[1500px]
          4xl:max-w-[1900px]
        "
      >
        {/* GLASS CARD */}
        <div
          className="
            relative
            w-full
            rounded-4xl
            bg-white/3
            border border-[#94c5de]/10
            backdrop-blur-2xl
            shadow-2xl

            px-4
            pt-4
            pb-4

            sm:px-5
            sm:pt-5

            md:px-7

            lg:px-8
            lg:pt-10
            lg:pb-7

            2xl:px-10
          "
        >
          {/* GRID / CONTEÚDO */}
          <div
            className="
              relative
              w-full

              grid
              grid-cols-1
              gap-4

              sm:gap-5

              md:gap-6

              lg:block
            "
          >
            {/* FOTO
                Mobile/tablet: participa normalmente do layout.
                Desktop: sai do fluxo e flutua sobre o glass.
            */}
            <div
              className="
                relative
                z-10
                mx-auto
                w-full
                max-w-[250px]
                overflow-hidden
                rounded-4xl
                shadow-xl

                sm:max-w-[280px]

                md:max-w-[300px]

                lg:absolute
                lg:left-4
                lg:bottom-0
                lg:mx-0
                lg:w-[34%]
                lg:max-w-[385px]

                xl:left-6
                xl:w-[32%]

                2xl:left-8
                2xl:w-[30%]
                2xl:max-w-[430px]

                4xl:left-10
                4xl:max-w-[500px]
              "
            >
              <Image
                src="/joia3.jpeg"
                alt="Atendimento psicológico"
                width={450}
                height={400}
                sizes="(max-width: 768px) 100vw, 35vw"
                className="relative h-auto w-full object-cover"
                priority
              />
            </div>

            {/* ÁREA DO TEXTO */}
            <div
              className="
                relative
                z-20
                w-full

                md:flex
                md:justify-center

                lg:ml-auto
                lg:w-[70%]

                xl:w-[68%]

                2xl:w-[69%]
              "
            >
              <div
                className="
                  w-full

                  sm:max-w-[520px]

                  md:max-w-[650px]
                  md:text-center

                  lg:max-w-[720px]
                  lg:text-left

                  2xl:max-w-[900px]
                "
              >
                {/* TÍTULO */}
                <div
                  className="
                    text-left
                    font-black
                    uppercase
                    leading-[0.8]
                    tracking-[-0.06em]
                    text-[#f1972e]
                    font-family-[New Title]

                    md:text-center

                    lg:text-left
                  "
                >
                  <div
                    className="
                      flex
                      items-end
                      justify-start
                      gap-1

                      sm:gap-2

                      md:justify-center

                      lg:justify-start
                    "
                  >
                    <span
                      className="
                        block
                        whitespace-nowrap

                        text-[clamp(2rem,8.5vw,2.6rem)]

                        sm:text-[clamp(2.5rem,8vw,3.7rem)]

                        md:text-[clamp(3.5rem,7vw,5.2rem)]

                        lg:text-[clamp(4rem,5vw,6.5rem)]

                        2xl:text-[clamp(5rem,4.5vw,8rem)]

                        4xl:text-[clamp(6rem,3.8vw,9rem)]
                      "
                    >
                      KEEP CALM
                    </span>

                    <Image
                      src="/Ativo_3.svg"
                      alt="Ícone Keep Calm"
                      width={120}
                      height={120}
                      className="
                        h-auto
                        w-[25px]
                        mb-3
                        ml-2

                        sm:w-[32px]

                        md:w-[48px]

                        lg:w-[100px]

                        2xl:w-[120px]

                        4xl:w-[200px]
                      "
                    />
                  </div>

                  <span
                    className="
                      mb-4
                      block
                      whitespace-nowrap

                      text-[clamp(2.25rem,9vw,3rem)]

                      sm:text-[clamp(2.8rem,8.5vw,4rem)]

                      md:text-[clamp(3.8rem,7vw,5.5rem)]

                      lg:text-[clamp(4.1rem,5.2vw,7rem)]

                      2xl:text-5rem
                    "
                  >
                    E FAÇA TERAPIA
                  </span>
                </div>

                {/* TEXTO */}
                <div
                  className="
                    relative
                    z-20
                    pt-2
                    text-left

                    sm:pt-3

                    md:pt-5
                    md:text-center

                    lg:pt-2
                    lg:text-left
                  "
                >
                  <h1
                    className="
                      text-lg
                      font-semibold
                      leading-tight
                      text-[#0c2a3d]
                      font-family-[New Title]

                      sm:text-xl

                      md:text-2xl

                      lg:text-3xl

                      2xl:text-4xl
                    "
                  >
                    Atendimento psicológico focado na sua saúde mental, com
                    acolhimento e mudança real
                  </h1>

                  <p
                    className="
                      mt-2
                      max-w-none
                      text-sm
                      text-[#0c2a3d]/90

                      md:mx-auto
                      md:max-w-lg

                      lg:mx-0
                      lg:max-w-lg

                      2xl:text-base
                    "
                  >
                    Um olhar profissional e humano para apoiar sua evolução com
                    empatia e clareza
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      justify-start

                      md:justify-center

                      lg:justify-end

                      2xl:mt-4
                    "
                  >
                    <a
                      href="https://wa.me/554791541117?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        rounded-full
                        bg-[#f1972e]
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-[#0c2a3d]
                        transition
                        hover:bg-[#d58224]
                      "
                    >
                      Agendar sessão
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
