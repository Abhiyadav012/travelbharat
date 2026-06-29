import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function States({ search }) {
  // const states = [
  //   {
  //     name: "Bihar",
  //     image: "/bihar.jpg",
  //     path: "/states/bihar",
  //     category: ["Heritage", "Religious", "Nature"],
  //     places: ["Nalanda", "Bodh Gaya", "Rajgir"],
  //   },
  //   {
  //     name: "Rajasthan",
  //     image: "/rajsathan.jpg",
  //     path: "/states/rajasthan",
  //     category: ["Heritage", "Adventure"],
  //     places: ["Jaipur", "Udaipur", "Jaisalmer"],
  //   },
  //   {
  //     name: "Goa",
  //     image: "/Goa.jpg",
  //     path: "/states/goa",
  //     category: ["Nature", "Adventure"],
  //     places: ["Calangute Beach", "Baga Beach", "Dudhsagar Falls"],
  //   },
  //   {
  //     name: "Kerala",
  //     image: "/kerala.jpg",
  //     path: "/states/kerala",
  //     category: ["Nature"],
  //     places: ["Munnar", "Alleppey", "Varkala Beach"],
  //   },
  // ];

  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const res = await API.get("/places/states");
      setStates(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredStates = states.filter((state) => {
    const term = search.toLowerCase();

    return (
      state.name.toLowerCase().includes(term) ||
      state.places.some((place) => place.toLowerCase().includes(term)) ||
      state.category.some((cat) => cat.toLowerCase().includes(term))
    );
  });

  return (
    <section data-aos="fade-up" className="py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Popular States
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStates.length === 0 ? (
          <p className="text-center text-gray-500 text-xl col-span-full">
            No states found 😢
          </p>
        ) : (
          filteredStates.map((state) => (
            <Link key={state.name} to={`/states/${state.name.toLowerCase()}`}>
              <div
                data-aos="zoom-in"
                className="relative overflow-hidden rounded-3xl h-80 cursor-pointer group"
              >
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-3xl font-bold">{state.name}</h3>

                  <p className="text-gray-200 mt-2">
                    Explore amazing destinations
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default States;
