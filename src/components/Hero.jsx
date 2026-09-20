import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center bg-cinema max-[800px]:min-h-[680px] max-[800px]:items-end max-[800px]:pb-[70px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-95"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(16,17,16,.98) 0%, rgba(16,17,16,.82) 38%, rgba(16,17,16,.22) 100%), linear-gradient(0deg, #101110 0%, transparent 25%), url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2200&q=85)",
        }}
      />
      <div className="relative mx-auto w-[min(1160px,calc(100%-64px))] pt-[72px] max-[800px]:w-[min(calc(100%-40px),600px)] max-[800px]:pt-[120px] max-[380px]:w-[calc(100%-28px)]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-accent">
          <Sparkles size={14} /> Curated for your next watch
        </div>
        <h1 className="my-5 max-w-[670px] text-[clamp(47px,6.2vw,84px)] font-bold leading-[.98] tracking-[-.06em] max-[800px]:text-[clamp(46px,13vw,70px)]">
          Discover your
          <br />
          <em className="font-display font-semibold not-italic text-accent">
            next favorite
          </em>{" "}
          story.
        </h1>
        <p className="max-w-[430px] text-[15px] leading-[1.7] text-[#bbbcb5]">
          Explore thousands of movies and TV shows, discover new favorites, and
          find something worth watching tonight.
        </p>
        <div className="mt-8 flex gap-3 max-[380px]:flex-col">
          <Link
            className="inline-flex items-center justify-center gap-2 rounded bg-accent px-5 py-3.5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ee624e]"
            to="/movies"
          >
            Explore movies <ArrowRight size={17} />
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded border border-white/25 px-5 py-3.5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            to="/movies"
          >
            <Play size={15} fill="currentColor" /> Start browsing
          </Link>
        </div>
        <div className="mt-14 flex items-center gap-3 text-xs text-[#878983]">
          <span className="flex">
            <i className="h-[22px] w-[22px] rounded-full border-2 border-[#171817] bg-[#637b75]" />
            <i className="-ml-1.5 h-[22px] w-[22px] rounded-full border-2 border-[#171817] bg-[#a77f67]" />
            <i className="-ml-1.5 h-[22px] w-[22px] rounded-full border-2 border-[#171817] bg-[#bd4f45]" />
          </span>{" "}
          <span>
            <strong className="text-ink">12k+</strong> stories waiting to be
            found
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 right-8 flex rotate-90 items-center gap-3 text-[9px] tracking-[.16em] text-[#777a74] max-[800px]:hidden">
        SCROLL TO EXPLORE <span className="h-px w-12 bg-[#777a74]" />
      </div>
    </section>
  );
}

export default Hero;
