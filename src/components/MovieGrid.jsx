import MovieCard from "./MovieCard";

function MovieGrid({ shows, onDetails }) {
  return (
    <div className="grid grid-cols-4 gap-[22px] max-[800px]:grid-cols-2 max-[800px]:gap-3">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onDetails={onDetails} />
      ))}
    </div>
  );
}

export default MovieGrid;
