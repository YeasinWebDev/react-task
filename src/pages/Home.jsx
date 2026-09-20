import { Compass, Search, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getShows } from "../services/movieApi";

function Feature({ icon, number, title, text }) {
  return (
    <article className="relative min-h-[220px] bg-cinema p-8 max-[800px]:min-h-[165px]">
      <div className="absolute right-7 top-7 text-[10px] text-[#4c4e49]">
        {number}
      </div>
      <div className="text-accent">{icon}</div>
      <h3 className="mt-8 text-lg font-semibold max-[800px]:mt-5">{title}</h3>
      <p className="mt-2 max-w-[220px] text-xs leading-7 text-muted">{text}</p>
    </article>
  );
}

function Home() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    getShows()
      .then((data) => setShows(data.slice(0, 4)))
      .catch(() => setShows([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Hero />
      <main>
        <section className="bg-[#151715] py-24">
          <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-[800px]:w-[min(calc(100%-40px),600px)]">
            <div className="mb-9 flex items-end justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
                  The watchlist edit
                </div>
                <h2 className="mt-3 text-[37px] font-bold tracking-[-.05em]">
                  Trending this week
                </h2>
              </div>
              <Link
                className="flex items-center gap-2 border-b border-accent pb-1 text-xs text-[#c5c5bf]"
                to="/movies"
              >
                View all shows <SquareArrowOutUpRight size={15} />
              </Link>
            </div>
            {loading ? (
              <Loading count={4} />
            ) : shows.length ? (
              <div className="grid grid-cols-4 gap-[22px] max-[800px]:grid-cols-2 max-[800px]:gap-3">
                {shows.map((show) => (
                  <MovieCard
                    key={show.id}
                    show={show}
                    onDetails={setSelectedShow}
                  />
                ))}
              </div>
            ) : (
              <EmptyState title="Trending is taking a break" />
            )}
          </div>
        </section>
        <section className="bg-cinema py-24">
          <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-[800px]:w-[min(calc(100%-40px),600px)]">
            <div className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
                A better way to browse
              </div>
              <h2 className="mt-3 text-[37px] font-bold tracking-[-.05em]">
                Find something worth watching.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-px bg-white/10 max-[800px]:grid-cols-1">
              <Feature
                icon={<Compass size={23} />}
                number="01"
                title="Discover"
                text="Go beyond the usual recommendations and find stories with a little more spark."
              />
              <Feature
                icon={<Search size={23} />}
                number="02"
                title="Search"
                text="From cult classics to tonight's comfort watch, your next favorite is a search away."
              />
              <Feature
                icon={<SquareArrowOutUpRight size={23} />}
                number="03"
                title="Explore details"
                text="Get the context you need to choose well: cast, genres, ratings, and more."
              />
            </div>
          </div>
        </section>
        <section className="bg-accent py-16">
          <div className="mx-auto flex w-[min(1160px,calc(100%-64px))] items-center justify-between max-[800px]:w-[min(calc(100%-40px),600px)] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-7">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
                Your next story starts here
              </div>
              <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-bold leading-[.94] tracking-[-.05em] text-white">
                Make tonight
                <br />
                <em className="font-display font-semibold not-italic text-[#221a18]">
                  movie night.
                </em>
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 rounded bg-[#e9e1d4] px-5 py-3.5 text-[13px] font-bold text-[#20221e]"
              to="/movies"
            >
              Browse the library <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </>
  );
}

export default Home;
