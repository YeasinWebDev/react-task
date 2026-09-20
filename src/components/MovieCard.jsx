import { CalendarDays, Star } from "lucide-react";

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function MovieCard({ show, onDetails }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : "—";
  const genres = show.genres?.slice(0, 2).join(" • ") || "Genre not listed";
  const summary = stripHtml(show.summary || "");

  return (
    <article className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-[#1b1d1b] transition hover:-translate-y-1.5 hover:border-accent/70 cursor-pointer">
      <button
        className="group relative block aspect-[.72] w-full overflow-hidden bg-[#292c29] p-0 cursor-pointer"
        type="button"
        onClick={() => onDetails(show)}
        aria-label={`View details for ${show.name}`}
      >
        {show.image?.original ? (
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={show.image.original}
            alt={`${show.name} poster`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,#41473f,#1d211e)] text-[#b7b6ad]">
            <span className="font-display text-5xl text-accent">MX</span>
            <small className="mt-1 text-[10px] uppercase tracking-[.12em]">
              No artwork
            </small>
          </div>
        )}
        <span className="absolute inset-x-3 bottom-3 rounded bg-accent/95 p-2.5 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">
          See details
        </span>
      </button>
      <div className="p-4 max-[380px]:p-2.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[15px] font-semibold text-ink max-[380px]:text-[13px]">
            {show.name}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-[11px] text-[#ddad61]">
            <Star size={13} fill="currentColor" />{" "}
            {show.rating?.average || "NR"}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1 overflow-hidden whitespace-nowrap text-[10px] text-[#888b83]">
          <CalendarDays size={14} className="text-accent" /> {year}{" "}
          <span>•</span> {genres}
        </div>
        {summary && (
          <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[#8f918b]">
            {summary}
          </p>
        )}
        <button
          className="mt-3 border-0 bg-transparent p-0 text-[11px] font-bold text-[#d4d2ca]"
          type="button"
          onClick={() => onDetails(show)}
        >
          See details <span className="ml-2 text-sm text-accent">↗</span>
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
