import ContactForm from "@components/contact/elementsContact/ContactForm";
import ContactGlobe from "@components/contact/elementsContact/ContactGlobe";
import ContactInfo from "@components/contact/elementsContact/ContactInfo";
import { useDivRefsStore } from "@store/store-sections";
import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const setDivRef = useDivRefsStore((state) => state.setDivRef);

  useEffect(() => {
    if (sectionRef.current) setDivRef("Contact", sectionRef);
  }, [setDivRef]);

  return (
    <div
      id="Contact"
      ref={sectionRef}
      className="relative w-full overflow-x-hidden"
    >
      {/* Fondo decorativo — coherente con el estilo del Banner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute -top-10 right-10 h-60 w-60 rounded-full bg-cyan-600/8 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-8 px-4 py-12 sm:px-6 lg:gap-10 lg:px-10 lg:py-16">
        {/* Heading — mismo estilo que Projects y About */}
        <div className="flex w-full items-center justify-center">
          <h2 className="w-full border-y-2 border-dashed border-white/20 py-4 text-center text-3xl font-bold text-white sm:text-4xl">
            Contact
          </h2>
        </div>

        {/* Grid principal: formulario + info | globo */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Columna izquierda: info de contacto + formulario */}
          <div className="flex flex-col gap-8 rounded-[28px] border border-slate-200/10 bg-linear-to-b from-slate-800/70 to-slate-400/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            {/* Título de la sección */}
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s get in touch
              </h3>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-indigo-300/60">
                notlimdev · Milton Vergara
              </p>
            </div>

            <ContactInfo />

            {/* Separador */}
            <div className="border-t border-slate-200/8" />

            <ContactForm />
          </div>

          {/* Columna derecha: globo 3D */}
          <div className="hidden min-h-[520px] lg:flex lg:flex-col lg:items-center lg:justify-center">
            <ContactGlobe />
          </div>
        </div>

        {/* Globo visible solo en mobile — debajo del form */}
        <div className="h-60 w-full lg:hidden">
          <ContactGlobe />
        </div>
      </div>
    </div>
  );
}
