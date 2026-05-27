const features = [
  {
    title: "AI Auto-Captions",
    description: "Generate perfectly timed captions in one tap — no more manual typing",
    icon: "CC"
  },
  {
    title: "One-Tap Trim",
    description: "Smart trim removes silences and filler words automatically",
    icon: "TR"
  },
  {
    title: "500+ Trending Templates",
    description: "Jump on trends instantly with templates updated weekly",
    icon: "500"
  },
  {
    title: "Direct Export",
    description: "Publish straight to TikTok, Reels, and YouTube Shorts",
    icon: "EX"
  },
  {
    title: "AI Voiceovers",
    description: "Professional AI narration in 20+ languages",
    icon: "VO"
  },
  {
    title: "Auto B-Roll",
    description: "AI finds and inserts relevant stock footage automatically",
    icon: "BR"
  }
];

const steps = [
  {
    title: "Upload Your Clip",
    description: "Drop in any video from your phone or camera roll"
  },
  {
    title: "AI Works Its Magic",
    description: "Auto-captions, smart trim, and template applied in seconds"
  },
  {
    title: "Export & Post",
    description: "Share directly to TikTok, Reels, or Shorts in one tap"
  }
];

const stats = ["4.8★ rating", "2M+ videos created", "50M+ views generated"];
const footerLinks = ["Features", "Templates", "Pricing", "Blog", "Privacy", "Terms", "Contact"];

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[360px] lg:mx-0">
      <div className="absolute -left-12 top-16 h-24 w-24 rounded-full border border-clipcraft-blue/40 opacity-70 animate-orbit" />
      <div className="absolute -right-10 bottom-20 h-32 w-32 rounded-full bg-clipcraft-blue/20 blur-3xl" />
      <div className="electric-border relative h-full rounded-[3.1rem] bg-[#050505] p-4 shadow-card animate-floatPhone">
        <div className="h-full overflow-hidden rounded-[2.35rem] bg-[#101010] ring-1 ring-white/10">
          <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-clipcraft-blue shadow-glow" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white">ClipCraft</span>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-clipcraft-gray">AI Edit</div>
          </div>

          <div className="relative h-[360px] overflow-hidden bg-gradient-to-br from-[#232323] via-[#111] to-[#06172a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_34%,rgba(30,144,255,0.55),transparent_8rem)]" />
            <div className="absolute left-1/2 top-10 h-44 w-32 -translate-x-1/2 rounded-3xl bg-gradient-to-b from-white/22 to-white/5 shadow-2xl ring-1 ring-white/20" />
            <div className="absolute left-10 top-16 h-20 w-16 rounded-2xl bg-black/35 backdrop-blur" />
            <div className="absolute right-9 top-28 h-24 w-20 rounded-2xl bg-white/10 backdrop-blur" />
            <div className="absolute left-0 top-0 h-16 w-full bg-gradient-to-b from-clipcraft-blue/40 to-transparent animate-scan" />
            <div className="absolute bottom-16 left-6 right-6 rounded-2xl bg-black/70 p-3 text-center shadow-glow backdrop-blur animate-captionPop">
              <p className="text-sm font-extrabold leading-tight text-white">TURN 8 MINUTES INTO 18 CLIPS</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-clipcraft-blue">Captions synced</p>
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-clipcraft-gray">Template</p>
                <p className="text-sm font-bold text-white">Viral Hook Cut</p>
              </div>
              <button className="rounded-full bg-clipcraft-blue px-4 py-2 text-xs font-bold text-white shadow-glow">Export</button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <div className="mb-2 flex justify-between text-[10px] uppercase tracking-[0.18em] text-clipcraft-gray">
                <span>Smart timeline</span>
                <span>00:14</span>
              </div>
              <div className="flex w-[200%] gap-2 animate-timeline">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-14 w-16 shrink-0 rounded-xl bg-gradient-to-br from-clipcraft-blue/70 to-white/10"
                    style={{ opacity: 0.45 + (index % 4) * 0.12 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-clipcraft-gray">
              <div className="rounded-xl bg-white/5 p-2">Trim</div>
              <div className="rounded-xl bg-clipcraft-blue/20 p-2 text-clipcraft-blue">Captions</div>
              <div className="rounded-xl bg-white/5 p-2">B-roll</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-clipcraft-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-clipcraft-black/76 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-clipcraft-blue font-black text-white shadow-glow transition-transform group-hover:rotate-6">C</span>
            <span className="font-display text-xl tracking-tight">ClipCraft</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-clipcraft-gray md:flex">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#how-it-works">How It Works</a>
            <a className="rounded-full bg-clipcraft-blue px-5 py-2.5 font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-white hover:text-clipcraft-black" href="#waitlist">Join Waitlist</a>
          </div>
          <a className="rounded-full bg-clipcraft-blue px-4 py-2 text-sm font-bold text-white shadow-glow md:hidden" href="#waitlist">Join</a>
        </div>
      </nav>

      <section id="hero" className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="absolute left-1/2 top-10 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-clipcraft-blue/15 blur-3xl" />
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-clipcraft-blue/30 bg-clipcraft-blue/10 px-4 py-2 text-sm text-clipcraft-blue">
            <span className="h-2 w-2 rounded-full bg-clipcraft-blue shadow-glow" />
            Built for TikToks, Reels, and Shorts
          </div>
          <h1 className="text-balance font-display text-5xl uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Edit Short-Form Videos in Seconds with AI — No Experience Needed.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-clipcraft-gray">
            Create scroll-stopping TikToks, Reels, and Shorts with AI auto-captions, one-tap trim, and 500+ trending templates. Export directly to TikTok and Instagram Reels.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#waitlist" className="rounded-full bg-clipcraft-blue px-8 py-4 text-center font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-clipcraft-black">
              Join Waitlist
            </a>
            <a href="#features" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-clipcraft-blue hover:text-clipcraft-blue">
              See AI Tools
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-clipcraft-gray">
            <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">No editing timeline</span>
            <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">Templates updated weekly</span>
            <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">Direct social export</span>
          </div>
        </div>
        <PhoneMockup />
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-clipcraft-blue">Creator speed stack</p>
          <h2 className="font-display text-4xl uppercase tracking-[-0.04em] text-white sm:text-5xl">Everything needed to turn raw clips into viral-ready posts.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="blueprint-card group rounded-[2rem] p-7 shadow-card transition duration-300 hover:-translate-y-2 hover:border-clipcraft-blue/50">
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-clipcraft-blue/15 font-display text-sm text-clipcraft-blue ring-1 ring-clipcraft-blue/35 transition group-hover:scale-110 group-hover:bg-clipcraft-blue group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-clipcraft-gray">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="absolute inset-x-6 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-clipcraft-blue/70 to-transparent" />
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-clipcraft-blue">How it works</p>
          <h2 className="font-display text-4xl uppercase tracking-[-0.04em] text-white sm:text-5xl">Three taps from clip to post.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="electric-border rounded-[2rem] bg-clipcraft-panel2 p-8 shadow-card transition hover:-translate-y-2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-clipcraft-blue font-display text-2xl text-white shadow-glow">{index + 1}</div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-clipcraft-gray">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,144,255,0.22),rgba(255,255,255,0.04)_42%,rgba(30,144,255,0.12))] p-8 shadow-card lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">Join 10,000+ creators already using ClipCraft</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat} className="rounded-3xl bg-black/25 p-6 text-center ring-1 ring-white/10 backdrop-blur">
                  <p className="bg-[linear-gradient(90deg,#fff,#1E90FF,#fff)] bg-[length:200%_100%] bg-clip-text font-display text-3xl text-transparent animate-shimmer">{stat.split(" ")[0]}</p>
                  <p className="mt-2 text-sm text-clipcraft-gray">{stat.substring(stat.indexOf(" ") + 1)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-clipcraft-blue">Waitlist access</p>
        <h2 className="font-display text-5xl uppercase tracking-[-0.05em] text-white sm:text-6xl">Ready to Go Viral?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-clipcraft-gray">Get early access to ClipCraft and launch AI-edited shorts before your next trend window closes.</p>
        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-full border border-white/10 bg-white/5 p-2 shadow-card backdrop-blur sm:flex-row">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" type="email" required placeholder="creator@clipcraft.ai" className="min-h-14 flex-1 rounded-full border border-white/10 bg-clipcraft-panel px-6 text-white outline-none transition placeholder:text-clipcraft-gray focus:border-clipcraft-blue focus:ring-4 focus:ring-clipcraft-blue/20" />
          <button type="submit" className="min-h-14 rounded-full bg-clipcraft-blue px-8 font-bold text-white shadow-glow transition hover:bg-white hover:text-clipcraft-black">Join Waitlist</button>
        </form>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-clipcraft-blue font-black text-white">C</span>
              <span className="font-display text-lg">ClipCraft</span>
            </div>
            <p className="mt-3 text-sm text-clipcraft-gray">© 2026 ClipCraft. AI video editing for creator velocity.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-clipcraft-gray">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-clipcraft-blue">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
