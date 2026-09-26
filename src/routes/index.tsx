import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.asset.json";
import space from "@/assets/space.asset.json";
import night from "@/assets/night.asset.json";
import food from "@/assets/food.asset.json";

const instagram = "https://www.instagram.com/sky7.rooftop/";
const whatsapp = "https://wa.me/5548998663475";
const maps = "https://www.google.com/maps/search/?api=1&query=Sky7+Rooftop+Bar+Rua+Tubalcain+Faraco+150+Tubarao+SC";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKY7 Rooftop Bar — Tubarão, SC" },
      { name: "description", content: "Drinks, música ao vivo e noites inesquecíveis no 12º andar, no coração de Tubarão. Conheça o SKY7 Rooftop Bar e faça sua reserva." },
      { property: "og:title", content: "SKY7 Rooftop Bar — Tubarão, SC" },
      { property: "og:description", content: "Drinks, música ao vivo e noites inesquecíveis no 12º andar, no coração de Tubarão." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");

  function reserve(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formattedDate = date ? date.split("-").reverse().join("/") : "a combinar";
    const text = `Olá! Gostaria de fazer uma reserva no SKY7 Rooftop Bar.\nNome: ${name}\nData: ${formattedDate}\nHorário: ${time || "a combinar"}\nPessoas: ${people}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <section className="sky-hero flex flex-col" style={{ backgroundImage: `url(${hero.url})` }} id="inicio">
        <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-6 text-foreground md:px-12 md:py-8">
          <a href="#inicio" className="sky-eyebrow text-foreground/80">EST. TUBARÃO · SC</a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            <a className="sky-nav-link" href="#sobre">O SKY7</a>
            <a className="sky-nav-link" href="#experiencia">Experiência</a>
            <a className="sky-nav-link" href="#espaco">O espaço</a>
            <a className="sky-nav-link" href={instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="sky-nav-link" href="#reservas">Reservas</a>
          </nav>
          <Button variant="ghost" size="icon" className="text-foreground md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </header>
        <nav className={`absolute inset-x-0 top-20 z-20 flex flex-col gap-5 border-b border-border/50 bg-background/60 px-7 py-7 backdrop-blur-md transition-[opacity,transform,visibility] duration-[400ms] ease-out md:hidden motion-reduce:transition-none ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"}`} aria-label="Navegação móvel" aria-hidden={!menuOpen} inert={!menuOpen}>{[["O SKY7", "#sobre"], ["Experiência", "#experiencia"], ["O espaço", "#espaco"], ["Instagram", instagram], ["Reservas", "#reservas"]].map(([label, href]) => <a key={label} className="sky-nav-link" href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-10 text-center md:pb-10">
          <p className="sky-eyebrow mb-8 md:mb-10">12º ANDAR · SEVEN BUSINESS CENTER</p>
          <h1 className="sky-wordmark text-foreground">SKY7</h1>
          <p className="mt-5 font-display text-2xl italic text-primary md:text-3xl">Rooftop Bar</p>
          <div className="my-9 h-px w-16 bg-primary/60 md:my-11" />
          <h2 className="max-w-xl font-display text-[2.1rem] font-light italic leading-[1.12] md:text-5xl">Sua noite começa nas alturas</h2>
          <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/75 md:max-w-lg">Drinks, música ao vivo e uma vista única de Tubarão. O encontro perfeito entre a cidade e a noite.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5 md:gap-9">
            <Button asChild variant="skyOutline" className="h-12 px-7 text-[10px] tracking-[.25em]"><a href="#reservas">Reservar mesa <ArrowRight /></a></Button>
            <a href={instagram} target="_blank" rel="noreferrer" className="sky-nav-link inline-flex items-center gap-2"><Instagram size={15} /> @sky7.rooftop</a>
          </div>
          <p className="mt-10 text-[10px] uppercase tracking-[.25em] text-foreground/60">Centro · Tubarão · Santa Catarina</p>
        </div>
        <a href="#sobre" aria-label="Explorar o SKY7" className="mx-auto mb-7 text-primary"><ArrowDown size={18} strokeWidth={1} /></a>
      </section>

      <section id="sobre" className="bg-background px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1fr_1fr] md:gap-24">
          <div><p className="sky-eyebrow">Quem somos</p><div className="sky-rule my-7" /><h2 className="sky-section-title max-w-xl">A cidade é outra vista daqui de cima.</h2></div>
          <div className="space-y-6 text-sm font-light leading-8 text-muted-foreground md:text-base">
            <p>No coração de Tubarão, o SKY7 Rooftop Bar transforma qualquer encontro em uma noite para lembrar. No 12º andar do Seven Business Center, a vista da cidade encontra boa música, coquetéis e a energia de quem sabe aproveitar o momento.</p>
            <p>Um espaço para reunir os amigos, celebrar, dançar e deixar a noite acontecer — sempre com Tubarão aos seus pés.</p>
            <a href="#experiencia" className="sky-nav-link inline-flex items-center gap-3 pt-3 text-primary">Descubra a experiência <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="grid min-h-[560px] md:grid-cols-2">
        <div className="sky-photo-wrap min-h-[340px] md:min-h-[560px]"><img className="sky-photo" src={space.url} alt="Ambientes e iluminação do SKY7 Rooftop Bar" loading="lazy" /></div>
        <div className="flex items-center bg-secondary px-8 py-20 md:px-16 lg:px-24">
          <div className="max-w-lg"><p className="sky-eyebrow">Nossa história</p><div className="sky-rule my-7" /><h2 className="sky-section-title">No alto de Tubarão, a noite ganha outro ritmo.</h2><p className="mt-8 text-sm font-light leading-8 text-muted-foreground md:text-base">O SKY7 é mais do que um bar. É um ponto de encontro para viver a música de perto, brindar com bons drinks e aproveitar cada momento em um cenário que só um rooftop pode oferecer.</p><a href={maps} target="_blank" rel="noreferrer" className="sky-nav-link mt-8 inline-flex items-center gap-3 text-primary"><MapPin size={15} /> Como chegar <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section id="experiencia" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl"><p className="sky-eyebrow">A experiência SKY7</p><div className="sky-rule my-7" /><h2 className="sky-section-title max-w-3xl">Uma grande noite começa aqui.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            <article><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={night.url} alt="Noite e pista iluminada no SKY7" loading="lazy" /></div><p className="sky-eyebrow mt-7">01 / Entretenimento</p><h3 className="mt-3 font-display text-3xl">Música & dança</h3><p className="mt-3 text-sm font-light leading-7 text-muted-foreground">Música ao vivo, DJs e noites que pedem mais uma dança.</p></article>
            <article><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={space.url} alt="Interior do rooftop SKY7" loading="lazy" /></div><p className="sky-eyebrow mt-7">02 / A atmosfera</p><h3 className="mt-3 font-display text-3xl">Lá em cima</h3><p className="mt-3 text-sm font-light leading-7 text-muted-foreground">Uma vista de Tubarão, bons encontros e a energia de um lugar único.</p></article>
            <article><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={food.url} alt="Petiscos e pratos servidos no SKY7" loading="lazy" /></div><p className="sky-eyebrow mt-7">03 / À mesa</p><h3 className="mt-3 font-display text-3xl">Drinks & sabores</h3><p className="mt-3 text-sm font-light leading-7 text-muted-foreground">Coquetéis, cervejas, vinhos e opções para compartilhar no bar.</p></article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl"><p className="sky-eyebrow">Mais que um bar</p><div className="sky-rule my-7" /><h2 className="sky-section-title max-w-3xl">Do primeiro brinde à última música.</h2>
          <div className="mt-16 grid gap-x-14 gap-y-10 md:grid-cols-3">
            {[["01", "Vista da cidade", "Tubarão de um novo ângulo, no 12º andar."], ["02", "Música ao vivo", "A trilha sonora certa para cada encontro."], ["03", "Coquetéis", "Clássicos e drinks para brindar a noite."], ["04", "Happy hour", "Um bom motivo para estender o encontro."], ["05", "Encontros", "Amigos, grupos e celebrações especiais."], ["06", "A noite toda", "Um lugar para conversar, dançar e aproveitar."]].map(([number, title, description]) => <div key={number} className="border-t border-border pt-5"><span className="sky-eyebrow">{number}</span><h3 className="mt-5 font-display text-3xl">{title}</h3><p className="mt-3 text-sm font-light leading-7 text-muted-foreground">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="espaco" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="sky-eyebrow">O lugar</p><div className="sky-rule my-7" /><h2 className="sky-section-title">Noites memoráveis.</h2></div><a href={instagram} target="_blank" rel="noreferrer" className="sky-nav-link inline-flex items-center gap-2 text-primary"><Instagram size={16} /> Ver no Instagram <ArrowRight size={15} /></a></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3"><figure><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={space.url} alt="Salão do SKY7 Rooftop Bar" loading="lazy" /></div><figcaption className="mt-4 text-xs uppercase tracking-[.2em] text-primary">I &nbsp; O espaço</figcaption></figure><figure><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={night.url} alt="Pista e luzes no SKY7" loading="lazy" /></div><figcaption className="mt-4 text-xs uppercase tracking-[.2em] text-primary">II &nbsp; A noite</figcaption></figure><figure><div className="sky-photo-wrap aspect-[4/5]"><img className="sky-photo" src={hero.url} alt="Letreiro luminoso SKY7 no rooftop" loading="lazy" /></div><figcaption className="mt-4 text-xs uppercase tracking-[.2em] text-primary">III &nbsp; SKY7</figcaption></figure></div>
        </div>
      </section>

      <section id="reservas" className="bg-secondary px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24"><div><p className="sky-eyebrow">Reservas</p><div className="sky-rule my-7" /><h2 className="sky-section-title">Sua noite no SKY7 começa aqui.</h2><p className="mt-7 max-w-md text-sm font-light leading-8 text-muted-foreground">Escolha a data, o horário e o número de pessoas. Nossa equipe recebe seu pedido pelo WhatsApp e confirma a disponibilidade.</p><div className="mt-12 border-t border-border pt-7"><p className="sky-eyebrow">Onde estamos</p><p className="mt-4 text-sm leading-7">Rua Tubalcain Faraco, 150 · 12º andar<br />Centro, Tubarão · SC · 88701-150</p><a href={maps} target="_blank" rel="noreferrer" className="sky-nav-link mt-4 inline-flex items-center gap-2 text-primary"><MapPin size={15} /> Ver rotas <ArrowRight size={14} /></a></div><div className="mt-9 flex flex-col gap-3 text-sm text-muted-foreground"><a className="inline-flex items-center gap-3 hover:text-primary" href="tel:+5548998663475"><Phone size={15} /> (48) 99866-3475</a><a className="inline-flex items-center gap-3 hover:text-primary" href={instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> @sky7.rooftop</a></div></div>
          <form onSubmit={reserve} className="self-center"><p className="sky-eyebrow mb-8">Faça sua reserva</p><label className="block text-xs uppercase tracking-[.17em] text-muted-foreground">Nome<input className="sky-input" required placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} /></label><div className="mt-7 grid grid-cols-2 gap-5"><label className="block text-xs uppercase tracking-[.17em] text-muted-foreground">Data<input className="sky-input" type="date" required value={date} onChange={e => setDate(e.target.value)} /></label><label className="block text-xs uppercase tracking-[.17em] text-muted-foreground">Horário<input className="sky-input" type="time" required value={time} onChange={e => setTime(e.target.value)} /></label></div><label className="mt-7 block text-xs uppercase tracking-[.17em] text-muted-foreground">Pessoas<select className="sky-input" value={people} onChange={e => setPeople(e.target.value)}>{Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n} {n === 1 ? "pessoa" : "pessoas"}</option>)}</select></label><Button variant="skySolid" className="mt-10 h-12 w-full text-[10px] tracking-[.23em]" type="submit">Solicitar reserva pelo WhatsApp <ArrowRight /></Button><p className="mt-5 text-xs font-light text-muted-foreground">A reserva está sujeita à confirmação da equipe.</p></form>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12 md:px-12"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"><div><p className="font-display text-4xl font-light tracking-[.08em]">SKY7 <span className="text-lg italic tracking-normal text-primary">Rooftop Bar</span></p><p className="mt-2 text-xs tracking-[.12em] text-muted-foreground">CENTRO · TUBARÃO · SANTA CATARINA</p></div><div className="flex items-center gap-7"><a href={instagram} aria-label="Instagram do SKY7" target="_blank" rel="noreferrer" className="hover:text-primary"><Instagram size={19} /></a><a href={whatsapp} aria-label="WhatsApp do SKY7" target="_blank" rel="noreferrer" className="hover:text-primary"><Phone size={18} /></a><a href={maps} aria-label="Localização do SKY7" target="_blank" rel="noreferrer" className="hover:text-primary"><MapPin size={18} /></a></div></div></footer>
    </main>
  );
}