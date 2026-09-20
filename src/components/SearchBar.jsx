import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <label className="flex w-full items-center gap-3.5 rounded border border-[#3b3e39] bg-[#191b19] px-5 py-[18px] text-accent focus-within:border-accent">
      <Search size={20} aria-hidden="true" />
      <span className="sr-only">Search shows</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border-0 bg-transparent text-sm text-ink outline-none placeholder:text-[#777a74]"
        placeholder="Search for a movie or TV show..."
      />
      {value && <kbd className="text-[9px] text-[#71746c]">ESC</kbd>}
    </label>
  );
}

export default SearchBar;
