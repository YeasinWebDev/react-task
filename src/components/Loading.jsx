function Loading({ count = 8 }) {
  return (
    <div
      className="grid grid-cols-4 gap-[22px] max-[800px]:grid-cols-2 max-[800px]:gap-3"
      aria-label="Loading shows"
      aria-busy="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          className="overflow-hidden rounded-md border border-white/10 bg-[#181a18]"
          key={index}
        >
          <div className="aspect-[.72] animate-pulse bg-[#292c29]" />
          <div className="space-y-2 p-4">
            <div className="h-3 w-3/4 animate-pulse rounded bg-[#30332f]" />
            <div className="h-2 animate-pulse rounded bg-[#30332f]" />
            <div className="h-2 w-1/2 animate-pulse rounded bg-[#30332f]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
