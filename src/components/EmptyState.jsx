import { SearchX } from "lucide-react";

function EmptyState({
  title = "No shows found",
  message = "Try a different search term or browse our full library.",
}) {
  return (
    <div className="flex min-h-[270px] flex-col items-center justify-center text-center">
      <div className="mb-4 grid h-[52px] w-[52px] place-items-center rounded-full border border-[#3f423d] text-accent">
        <SearchX size={24} />
      </div>
      <h2 className="m-0 text-xl text-ink">{title}</h2>
      <p className="mt-2 text-[13px] text-muted">{message}</p>
    </div>
  );
}

export default EmptyState;
