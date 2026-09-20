import { useState } from "react";
import { Code2, Film, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute top-0 z-10 w-full border-b border-white/10 bg-cinema/40 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1160px,calc(100%-64px))] items-center justify-between max-[800px]:w-[min(calc(100%-40px),600px)]">
        <Link
          className="inline-flex items-center gap-2 font-bold tracking-[-.04em]"
          to="/"
          onClick={closeMenu}
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#e9e1d4] text-[#171816]">
            <Film size={17} />
          </span>{" "}
          Movie<span className="text-accent">Explorer</span>
        </Link>
        <nav
          className={`${menuOpen ? "flex" : "hidden"} absolute left-5 right-5 top-[76px] flex-col gap-0 rounded-md border border-white/10 bg-[#191b19] p-2 text-[13px] text-[#c2c3be] shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-[34px] md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          aria-label="Main navigation"
        >
          <NavLink className="p-3 md:p-0" to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink className="p-3 md:p-0" to="/movies" onClick={closeMenu}>
            Movies
          </NavLink>
          <a
            className="flex items-center gap-2 p-3 md:p-0"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Code2 size={16} /> GitHub
          </a>
          <Link
            className="rounded bg-accent p-3 text-center font-semibold text-white"
            to="/movies"
            onClick={closeMenu}
          >
            Explore movies <span className="ml-2">↗</span>
          </Link>
        </nav>
        <button
          className="text-ink md:hidden"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
