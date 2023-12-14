const App = () => {
  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Search Bar */}
      <div className="mb-8">
        <label className="form-control w-full max-w-xs flex">
          <div className="label">
            <span className="label-text">Film apa yang sedang kamu cari?</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={({ target }) => search(target.value)} />
        </label>
      </div>

      {/* Card */}
      <div className="flex justify-start items-start">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jsudul</h2>
            <p>Tanggal</p>
            <div className="card-actions justify-end">
              <div className="badge badge-accent">8.9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
