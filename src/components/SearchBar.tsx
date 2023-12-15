export default function SearchBar() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* Search Bar */}
        <div className="mb-8">
          <label className="form-control w-full max-w-xs flex">
            <div className="label">
              <span className="label-text">Film apa yang sedang kamu cari?</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={({ target }) => search(target.value)} />
          </label>
        </div>
      </div>
    </>
  );
}
