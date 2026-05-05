import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";

const productPhoto =
  "https://images.unsplash.com/photo-1693996045838-980674653385?auto=format&fit=crop&w=2400&q=85";

const athletePhoto =
  "https://images.unsplash.com/photo-1668361920298-e3ebb0798819?auto=format&fit=crop&w=2200&q=85";

const categories = [
  "Whey isolate",
  "Creatina 200 mesh",
  "Pre workout",
  "Elettroliti",
  "Barrette 22g",
  "Omega 3",
  "Shaker steel",
  "Recovery stack",
];

const products = [
  {
    name: "Whey Pro Zero",
    type: "Proteine isolate",
    price: "39,90",
    flavor: "Vaniglia bourbon",
    meta: "26g proteine",
    color: "from-lime-300 via-white to-zinc-200",
  },
  {
    name: "Creatine Pure",
    type: "Monoidrato micronizzato",
    price: "24,90",
    flavor: "Neutra",
    meta: "5g dose",
    color: "from-cyan-300 via-white to-zinc-200",
  },
  {
    name: "Rage Pump",
    type: "Pre workout clean",
    price: "34,90",
    flavor: "Blood orange",
    meta: "zero zuccheri",
    color: "from-red-400 via-orange-200 to-white",
  },
  {
    name: "Hydra Salt",
    type: "Elettroliti + magnesio",
    price: "18,90",
    flavor: "Lime glaciale",
    meta: "60 servings",
    color: "from-emerald-300 via-teal-100 to-white",
  },
];

const guarantees = [
  {
    icon: FlaskConical,
    title: "Lotti tracciati",
    text: "Ogni batch ha scheda tecnica, origine materia prima e controlli interni.",
  },
  {
    icon: ShieldCheck,
    title: "Formula pulita",
    text: "Ingredienti leggibili, niente blend opachi e dosaggi dichiarati in etichetta.",
  },
  {
    icon: Truck,
    title: "Spedizione 24/48h",
    text: "Imballo antiurto e tracking automatico appena il pacco parte.",
  },
];

const stats = [
  ["4.9/5", "rating medio"],
  ["38k+", "ordini evasi"],
  ["92%", "clienti repeat"],
  ["24h", "cutoff operativo"],
];

const stacks = [
  "Massa pulita",
  "Definizione",
  "Forza",
  "Recupero",
  "Focus",
  "Endurance",
];

const reviews = [
  {
    quote:
      "Packaging top, gusto pulito e creatina che si scioglie davvero. Sembra un brand molto piu grande.",
    name: "Luca M.",
    role: "Powerlifting amatoriale",
  },
  {
    quote:
      "Il bundle forza e' diventato fisso. Arriva in fretta e le etichette sono chiare, zero fuffa.",
    name: "Sara P.",
    role: "Cross training",
  },
  {
    quote:
      "Finalmente un sito che non urla promesse strane. Prodotti seri, numeri chiari, checkout facile.",
    name: "Marco T.",
    role: "Personal trainer",
  },
];

function ProductMockup({
  name,
  type,
  color,
}: {
  name: string;
  type: string;
  color: string;
}) {
  return (
    <div className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-lg bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(190,242,100,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="absolute bottom-0 h-16 w-full bg-black/40 blur-2xl" />
      <div className="relative mb-5 h-44 w-32 rounded-lg bg-zinc-100 shadow-2xl shadow-black/60 sm:h-52 sm:w-36">
        <div className="h-6 rounded-t-lg bg-zinc-950" />
        <div className={`mx-4 mt-5 rounded-md bg-gradient-to-br ${color} p-3 text-zinc-950`}>
          <p className="text-[10px] font-black uppercase">IRONSTACK</p>
          <p className="mt-6 text-xl font-black leading-none">{name}</p>
          <p className="mt-2 text-xs font-semibold text-zinc-700">{type}</p>
        </div>
        <div className="mx-4 mt-4 h-2 rounded-full bg-zinc-300" />
        <div className="mx-4 mt-2 h-2 w-2/3 rounded-full bg-zinc-300" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="IRONSTACK home">
            <span className="grid size-10 place-items-center rounded-lg bg-lime-300 text-zinc-950">
              <Dumbbell size={22} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-black">IRONSTACK</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-zinc-300 md:flex">
            <a href="#prodotti" className="transition hover:text-white">
              Prodotti
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Metodo
            </a>
            <a href="#bundle" className="transition hover:text-white">
              Bundle
            </a>
            <a href="#recensioni" className="transition hover:text-white">
              Recensioni
            </a>
          </div>

          <a
            href="#prodotti"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-black text-zinc-950 transition hover:bg-lime-300"
          >
            <ShoppingCart size={18} />
            Compra
          </a>
        </nav>
      </header>

      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden pt-24">
        <Image
          src={productPhoto}
          alt="Barattoli di proteine, creatina e pre workout con shaker"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.95)_0%,rgba(9,9,11,0.72)_44%,rgba(9,9,11,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-lime-300/35 bg-lime-300/10 px-3 py-2 text-sm font-bold text-lime-200">
              <Sparkles size={17} />
              Drop ufficiale 2026
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              IRONSTACK
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Integratori da palestra con etichette chiare, gusto serio e stack
              pronti per forza, massa e recupero. Zero promesse strane, solo
              formule solide e una presenza che spacca.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#prodotti"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-lime-300 px-6 text-base font-black text-zinc-950 transition hover:bg-white"
              >
                <ShoppingCart size={20} />
                Shop integratori
              </a>
              <a
                href="#bundle"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 text-base font-black text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
              >
                Stack consigliati
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="border-l border-white/20 pl-4">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="w-full max-w-sm rounded-lg border border-white/15 bg-zinc-950/55 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black uppercase text-lime-200">Bundle forza</p>
                <div className="flex text-lime-300" aria-label="5 stelle">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-3xl font-black">Whey + Creatina + Pump</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Il trio piu venduto per allenamenti pesanti e recupero lineare.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-2xl font-black">79,90 EUR</span>
                <span className="rounded-md bg-red-500 px-2 py-1 text-xs font-black text-white">
                  -18%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-lime-300 py-4 text-zinc-950">
        <div className="mx-auto flex max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
            {[...categories, ...categories].map((item, index) => (
              <span key={`${item}-${index}`} className="text-lg font-black uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="prodotti" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-lime-300">Shop</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-none sm:text-5xl">
              Prodotti puliti, scaffale aggressivo, checkout immediato.
            </h2>
          </div>
          <a
            href="#bundle"
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-lg border border-white/15 px-5 font-black text-white transition hover:border-lime-300 hover:text-lime-300"
          >
            Vedi bundle
            <ChevronRight size={19} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
            >
              <ProductMockup name={product.name} type={product.type} color={product.color} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{product.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-zinc-400">{product.type}</p>
                  </div>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-black text-zinc-950">
                    {product.meta}
                  </span>
                </div>
                <p className="mt-4 text-sm text-zinc-300">Gusto: {product.flavor}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-2xl font-black">{product.price} EUR</p>
                  <button className="grid size-11 place-items-center rounded-lg bg-lime-300 text-zinc-950 transition hover:bg-white">
                    <ShoppingCart size={20} />
                    <span className="sr-only">Aggiungi {product.name} al carrello</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="bg-zinc-100 py-20 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-red-600">Metodo</p>
            <h2 className="mt-3 text-4xl font-black leading-none sm:text-5xl">
              Serio dove conta: formula, logistica, post vendita.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              Il tono e&apos; forte, ma il prodotto resta concreto: dosaggi dichiarati,
              ingredienti riconoscibili e pagine prodotto pensate per chi confronta
              prima di comprare.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {guarantees.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-lg border border-zinc-200 bg-white p-5">
                  <div className="grid size-11 place-items-center rounded-lg bg-zinc-950 text-lime-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bundle" className="relative isolate overflow-hidden py-24">
        <Image
          src={athletePhoto}
          alt="Atleta in allenamento con palla medica"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.96),rgba(9,9,11,0.7),rgba(9,9,11,0.38))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-lime-300">Stack lab</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-none sm:text-6xl">
              Bundle pronti per obiettivi veri.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
              Selezioni pensate per vendere subito: tre prodotti, una logica
              chiara, prezzo leggibile e vantaggio economico evidente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg bg-white p-6 text-zinc-950">
              <div className="flex items-center justify-between gap-4">
                <PackageCheck className="text-red-600" size={28} />
                <span className="rounded-md bg-zinc-950 px-2 py-1 text-xs font-black text-lime-300">
                  Best seller
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-black">Power Mass</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Whey Pro Zero, Creatine Pure, Hydra Salt.
              </p>
              <p className="mt-6 text-4xl font-black">69,90 EUR</p>
              <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 font-black text-white transition hover:bg-red-600">
                <ShoppingCart size={19} />
                Aggiungi bundle
              </button>
            </article>

            <article className="rounded-lg border border-lime-300/40 bg-lime-300 p-6 text-zinc-950">
              <div className="flex items-center justify-between gap-4">
                <Zap size={28} />
                <span className="rounded-md bg-white px-2 py-1 text-xs font-black">-22%</span>
              </div>
              <h3 className="mt-6 text-3xl font-black">Rage Cut</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-800">
                Pre workout, elettroliti, barretta proteica.
              </p>
              <p className="mt-6 text-4xl font-black">54,90 EUR</p>
              <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 font-black text-white transition hover:bg-white hover:text-zinc-950">
                <ShoppingCart size={19} />
                Aggiungi bundle
              </button>
            </article>
          </div>
        </div>
      </section>

      <section id="recensioni" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase text-lime-300">Social proof</p>
            <h2 className="mt-3 text-4xl font-black leading-none sm:text-5xl">
              A colpo d&apos;occhio comunica fiducia.
            </h2>
            <div className="mt-7 space-y-3 text-zinc-300">
              {[
                "Pagamenti sicuri",
                "Reso semplice entro 30 giorni",
                "Customer care italiano",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-lime-300" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="flex text-lime-300" aria-label="5 stelle">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-200">{`"${review.quote}"`}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-black">{review.name}</p>
                  <p className="mt-1 text-sm text-zinc-400">{review.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white py-16 text-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-red-600">Drop limitato</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none sm:text-5xl">
              Porta il carrello sopra i 79 EUR e sblocca shaker steel incluso.
            </h2>
          </div>
          <a
            href="#prodotti"
            className="inline-flex h-14 w-fit items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 font-black text-white transition hover:bg-lime-300 hover:text-zinc-950"
          >
            Inizia lo stack
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
