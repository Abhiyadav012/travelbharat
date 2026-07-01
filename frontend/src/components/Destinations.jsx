import DestinationCard from "./DestinationCard";

function Destinations() {
  const destinations = [
    {
      name: "Taj Mahal",
      state: "Uttar Pradesh",
      image: "/tajmahal.jpg",
    },
    {
      name: "Goa Beach",
      state: "Goa",
      image: "/GoaBeach.jpg",
    },
    {
      name: "Munnar",
      state: "Kerala",
      image: "/munarK.jpg",
    },
    {
      name: "Jaipur",
      state: "Rajasthan",
      image: "/hawa.jpg",
    },
  ];
  return (
    <section data-aos="fade-up" className="py-12 md:py-16 px-5 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Destinations
      </h2>

      <div data-aos="flip-left" className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            state={destination.state}
            image={destination.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
