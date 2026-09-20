import { Camera, Code2, Film, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0c0d0c]">
      <div className="mx-auto flex w-[min(1160px,calc(100%-64px))] items-start justify-between gap-6 py-12 max-[800px]:w-[min(calc(100%-40px),600px)] max-[800px]:flex-wrap">
        <div>
          <Link
            className="inline-flex items-center gap-2 font-bold tracking-[-.04em]"
            to="/"
          >
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#e9e1d4] text-[#171816]">
              <Film size={17} />
            </span>{" "}
            Movie<span className="text-accent">Explorer</span>
          </Link>
          <p className="mt-4 text-xs text-[#777a74]">
            Your next story is closer than you think.
          </p>
        </div>
        <div className="flex gap-6 pt-2 text-[11px] text-[#969892] max-[800px]:order-3 max-[800px]:w-full">
          <Link to="/">Home</Link>
          <Link to="/movies">Browse movies</Link>
          <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
            TVMaze API
          </a>
        </div>
        <div className="flex gap-2">
          <a
            className="grid h-[31px] w-[31px] place-items-center rounded-full border border-white/10 text-[#a4a49d]"
            href="https://github.com"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} />
          </a>
          <a
            className="grid h-[31px] w-[31px] place-items-center rounded-full border border-white/10 text-[#a4a49d]"
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
          </a>
          <a
            className="grid h-[31px] w-[31px] place-items-center rounded-full border border-white/10 text-[#a4a49d]"
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-[min(1160px,calc(100%-64px))] justify-between border-t border-white/10 py-4 text-[10px] text-[#555852] max-[800px]:w-[min(calc(100%-40px),600px)]">
        <span>© 2024 MovieExplorer</span>
        <span>Made for curious viewers</span>
      </div>
    </footer>
  );
}

export default Footer;
