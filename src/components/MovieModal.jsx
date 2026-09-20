import { useEffect } from "react";
import {
  CalendarDays,
  Clock3,
  ExternalLink,
  Globe2,
  Star,
  X,
} from "lucide-react";

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function MovieModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;
  const premiered = show.premiered
    ? new Date(`${show.premiered}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Not listed";
  const summary = stripHtml(
    show.summary || "No summary is available for this show yet.",
  );

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="relative grid max-h-[90vh] w-full max-w-[720px] overflow-auto rounded-lg border border-[#3f423c] bg-[#1a1c1a] shadow-2xl md:grid-cols-[250px_1fr]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 text-white"
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={20} />
        </button>
        <div className="min-h-[250px] bg-[#262a26] md:min-h-[360px]">
          {show.image?.original ? (
            <img
              className="h-full w-full object-cover"
              src={show.image.original}
              alt={`${show.name} poster`}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-[#b7b6ad]">
              <span className="font-display text-5xl text-accent">MX</span>
              <small>No artwork</small>
            </div>
          )}
        </div>
        <div className="p-7 md:p-10">
          <div className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
            Show details
          </div>
          <h2
            className="my-3 text-[34px] font-bold tracking-[-.04em] text-white"
            id="modal-title"
          >
            {show.name}
          </h2>
          <div className="flex items-center gap-1 text-[13px] text-[#ddad61]">
            <Star size={17} fill="currentColor" />{" "}
            {show.rating?.average || "Not rated"}{" "}
            <span className="mx-1 text-[#757970]">•</span>{" "}
            {show.type || "Series"}
          </div>
          <div className="my-7 grid grid-cols-2 gap-3 text-[11px] text-[#aeb0a8]">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-accent" /> {premiered}
            </span>
            <span className="flex items-center gap-2">
              <Globe2 size={16} className="text-accent" />{" "}
              {show.language || "Unknown"}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-accent" />{" "}
              {show.runtime ? `${show.runtime} min` : "Runtime N/A"}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />{" "}
              {show.status || "Unknown status"}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {show.genres?.length ? (
              show.genres.map((genre) => (
                <span
                  className="rounded border border-[#454943] px-2 py-1 text-[10px] text-[#b5b7af]"
                  key={genre}
                >
                  {genre}
                </span>
              ))
            ) : (
              <span>Genre not listed</span>
            )}
          </div>
          <div className="mt-7 border-t border-white/10 pt-5">
            <h3 className="mb-2 text-xs font-semibold">Summary</h3>
            <p className="text-xs leading-7 text-[#a4a69f]">{summary}</p>
          </div>
          {show.officialSite && (
            <a
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-accent"
              href={show.officialSite}
              target="_blank"
              rel="noreferrer"
            >
              Official website <ExternalLink size={15} />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default MovieModal;
