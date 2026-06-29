function Search({search, setSearch}) {
  return (
    <section data-aos="fade-up" className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Find Your Next Destination
        </h2>

        <p className="text-gray-500 mb-8">
          Search states, cities and tourist places
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="🔍 Search destinations..."
            className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-2xl outline-none shadow-md focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
          />

          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
