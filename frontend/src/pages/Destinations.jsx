import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function DestinationsPage() {
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const res = await API.get("/places");
      setAllPlaces(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Incredible India
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Explore All Destinations
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover heritage sites, beaches, hill stations, spiritual
            destinations and natural wonders from across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPlaces.map((place) => (
            <div
              key={place._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={place.image}
                alt={place.placeName}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {place.category}
                  </span>

                  <span className="text-sm text-gray-500">
                    {place.state}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-2">
                  {place.placeName}
                </h2>

                <p className="text-gray-500 mb-3">
                  📍 {place.city}, {place.state}
                </p>

                <p className="text-gray-600 mb-5">
                  {place.description}
                </p>

                <Link
                  to={`/place/${place._id}`}
                  className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold"
                >
                  Explore Destination
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;