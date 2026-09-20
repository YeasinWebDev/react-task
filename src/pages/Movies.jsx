import { AlertCircle, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import EmptyState from "../components/EmptyState";
import Loading from "../components/Loading";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import SearchBar from "../components/SearchBar";
import { getShows, searchShows } from "../services/movieApi";

function Movies() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const loadShows = async (searchQuery = "") => {
    setLoading(true);
    setError("");
    try {
      const data = searchQuery
        ? await searchShows(searchQuery)
        : await getShows();
      setShows(searchQuery ? data.map((result) => result.show) : data);
    } catch {
      setError("Something went wrong while loading shows.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => loadShows(query.trim()), 450);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="min-h-screen bg-cinema px-0 pb-24 pt-[150px]">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-[800px]:w-[min(calc(100%-40px),600px)]">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
              The full collection
            </div>
            <h1 className="my-4 text-[clamp(48px,6vw,74px)] font-bold leading-none tracking-[-.06em]">
              Explore movies
              <br />
              <em className="font-display font-semibold not-italic text-accent">
                & shows.
              </em>
            </h1>
            <p className="text-sm text-muted">
              Find your next watch from a world of unforgettable stories.
            </p>
          </div>
          <div className="font-display text-[95px] leading-none text-[#4a4d48] max-[800px]:hidden">
            MX
            <span className="block font-sans text-[10px] tracking-widest text-accent">
              /01
            </span>
          </div>
        </div>
        <SearchBar value={query} onChange={setQuery} />
        <div className="my-6 flex justify-between text-[11px] text-[#898c84]">
          <span>
            {loading
              ? "Loading library..."
              : `${shows.length} ${shows.length === 1 ? "result" : "results"}`}
          </span>
          {query && !loading && (
            <span className="text-accent">Results for “{query}”</span>
          )}
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="flex min-h-[270px] flex-col items-center justify-center gap-3 text-accent">
            <AlertCircle size={26} />
            <h2 className="text-xl text-ink">{error}</h2>
            <button
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-bold text-white"
              type="button"
              onClick={() => loadShows(query.trim())}
            >
              <RotateCcw size={16} /> Try again
            </button>
          </div>
        ) : shows.length ? (
          <MovieGrid shows={shows} onDetails={setSelectedShow} />
        ) : (
          <EmptyState
            title={`No results for “${query}”`}
            message="Try a broader title, or browse the full collection."
          />
        )}
      </div>
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
}

export default Movies;
