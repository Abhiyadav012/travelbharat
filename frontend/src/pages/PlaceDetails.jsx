import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PlaceDetails() {
  const { placeId } = useParams();

  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlace();
  }, [placeId]);

  const fetchPlace = async () => {
    try {
      const res = await API.get(`/places/${placeId}`);
      setPlace(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="text-center text-3xl py-20">Loading...</h1>;
  }

  if (!place) {
    return <h1 className="text-center text-3xl py-20">Place Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-3">{place.placeName}</h1>

      <p className="text-base md:text-xl text-gray-500 mb-6">
        📍 {place.city}, {place.state}
      </p>

      <img
        src={place.image}
        alt={place.placeName}
       className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-3xl mb-8"
      />

      <div className="bg-white shadow-lg rounded-3xl p-5 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>

        <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8 mb-6">
          {place.description}
        </p>

        <p className="text-base md:text-lg mb-8"className="text-lg mb-8">
          📍 <strong>Location:</strong> {place.city}, {place.state}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-50 p-4 md:p-5 rounded-2xl">
            <h3 className="font-bold mb-2">Category</h3>
            <p>{place.category}</p>
          </div>

          <div className="bg-orange-50 p-4 md:p-5 rounded-2xl">
            <h3 className="font-bold mb-2">Best Time</h3>
            <p>{place.bestTimeToVisit}</p>
          </div>

          <div className="bg-orange-50 p-4 md:p-5 rounded-2xl">
            <h3 className="font-bold mb-2">Entry Fee</h3>
            <p>{place.entryFee}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-orange-50 p-4 md:p-5 rounded-2xl">
            <h3 className="font-bold mb-2">Timings</h3>
            <p>{place.timings}</p>
          </div>

          <div className="bg-orange-50 p-4 md:p-5 rounded-2xl">
            <h3 className="font-bold mb-2">Google Maps</h3>

            <a
              href={place.mapLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Open Map
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={place.image}
            alt={place.placeName}
            className="h-52 md:h-64 w-full object-cover rounded-2xl"
          />

          <img
            src={place.image}
            alt={place.placeName}
            className="h-52 md:h-64 w-full object-cover rounded-2xl"
          />

          <img
            src={place.image}
            alt={place.placeName}
            className="h-52 md:h-64 w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
