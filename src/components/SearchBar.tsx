export default function SearchBar() {
  return (
    <div className="">
      {/* Search Bar */}
      <label className="form-control ">
        <input type="text" placeholder="Search Movies..." className="input input-bordered max-w-lg" onChange={({ target }) => search(target.value)} />
      </label>
    </div>
  );
}
