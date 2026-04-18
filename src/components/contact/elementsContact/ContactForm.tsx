import { personalInfo } from "@data/personal-info";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest === interest ? "" : interest,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `https://formspree.io/f/${personalInfo.formspreeId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-green-400/20 bg-green-400/5 px-6 py-10 text-center">
        <span className="text-4xl">✅</span>
        <p className="text-lg font-semibold text-white">¡Mensaje enviado!</p>
        <p className="text-sm text-slate-400">
          Te respondo a la brevedad a{" "}
          <span className="text-slate-200">{formData.email || "tu email"}</span>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-lg border border-slate-200/10 px-4 py-2 font-mono text-xs text-slate-400 transition-colors hover:text-white"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {/* Intereses — chips tipo radio */}
      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200/50">
          I&apos;m interested in
        </legend>
        <div className="flex flex-wrap gap-2">
          {personalInfo.interests.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleInterest(item)}
              aria-pressed={formData.interest === item}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium transition-all duration-200 ${
                formData.interest === item
                  ? "border-indigo-300/60 bg-indigo-400/20 text-indigo-200"
                  : "border-slate-200/12 bg-slate-100/6 text-slate-300/70 hover:border-slate-200/25 hover:text-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Nombre + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200/50"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="rounded-lg border border-slate-200/10 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-colors focus:border-indigo-300/40 focus:outline-none focus:ring-1 focus:ring-indigo-300/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200/50"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="rounded-lg border border-slate-200/10 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-colors focus:border-indigo-300/40 focus:outline-none focus:ring-1 focus:ring-indigo-300/20"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200/50"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Contame sobre tu proyecto o en qué te puedo ayudar..."
          className="resize-none rounded-lg border border-slate-200/10 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-colors focus:border-indigo-300/40 focus:outline-none focus:ring-1 focus:ring-indigo-300/20"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2.5 text-xs text-red-300">
          Algo salió mal. Intentá de nuevo o escribime directamente a{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="underline underline-offset-2"
          >
            {personalInfo.email}
          </a>
          .
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-mono text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:from-indigo-400 hover:to-cyan-400 hover:shadow-indigo-400/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
