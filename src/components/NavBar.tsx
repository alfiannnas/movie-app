import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div>
      <a className="navbar bg-black text-red flex justify-center">
        <SearchBar />

        <a className="btn btn-ghost text-yellow-400 text-lg">Movie-App</a>
      </a>
    </div>
  );
}
