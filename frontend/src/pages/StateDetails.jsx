import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";

function StateDetails() {
  const { stateName } = useParams();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchPlaces();
  }, [stateName]);

  const fetchPlaces = async () => {
    try {
      const res = await API.get(`/places/state/${stateName}`);
      setPlaces(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="text-center text-3xl py-20">Loading...</h1>;
  }

  if (places.length === 0) {
    return <h1 className="text-center text-3xl py-20">State Not Found</h1>;
  }

  const state = {
    title: stateName.charAt(0).toUpperCase() + stateName.slice(1),

    image: places[0].image,

    description: `${stateName} is one of India's beautiful tourist destinations.`,

    about: {
      famousFor: "Tourism, Heritage & Culture",
      bestTime: places[0].bestTimeToVisit,
    },
  };

  const filteredPlaces =
    selectedCategory === "All"
      ? places
      : places.filter((place) => place.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <img
        src={state.image}
        alt={state.title}
        className="w-full h-[60vh] object-cover"
      />

      {/* About */}
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
            Discover {state.title}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the Beauty of {state.title}
          </h1>

          <p className="text-lg text-gray-600 leading-8 mb-10">
            {state.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Famous For</h3>

              <p className="text-gray-700">{state.about.famousFor}</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Best Time To Visit</h3>

              <p className="text-gray-700">{state.about.bestTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Places */}
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold mb-8">Top Places To Visit</h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {["All", "Heritage", "Nature", "Religious", "Adventure"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {category}
              </button>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div
              key={place._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={place.image}
                alt={place.placeName}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{place.placeName}</h3>

                <p className="text-gray-500 mb-2">📍 {place.city}</p>

                <p className="text-gray-600 mb-4">{place.description}</p>

                <Link
                  to={`/place/${place._id}`}
                  className="block text-center py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StateDetails;
