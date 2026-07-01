function Categories() {
  const categories = [
    {
      name: "Heritage",
      icon: "🏛",
      count: 6,
      description: "Ancient forts, monuments and cultural landmarks",
    },
    {
      name: "Nature",
      icon: "🌿",
      count: 8,
      description: "Mountains, waterfalls, beaches and forests",
    },
    {
      name: "Religious",
      icon: "🙏",
      count: 3,
      description: "Temples, spiritual and pilgrimage destinations",
    },
    {
      name: "Adventure",
      icon: "🏕",
      count: 4,
      description: "Trekking, desert safari and outdoor activities",
    },
  ];

  return (
    <div data-aos="fade-up" className="min-h-screen bg-orange-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Explore By Category
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Tourist Categories</h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover India's most beautiful destinations based on your travel
            interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              data-aos="zoom-in"
              key={category.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-5">{category.icon}</div>

              <h2 className="text-2xl font-bold mb-3">{category.name}</h2>

              <p className="text-gray-600 mb-5">{category.description}</p>

              <div className="flex justify-between items-center">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
                  {category.count} Places
                </span>

                <span className="text-orange-500 font-bold">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
