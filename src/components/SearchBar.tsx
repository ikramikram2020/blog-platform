interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function SearchBar({
  searchText,
  setSearchText,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search for article .."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full p-3 mb-6 border rounded"
    />
  );
}
