import { MapPinned, Building2, Compass } from "lucide-react";

function Features() {
const features = [
  {
    icon: <MapPinned size={50} className="text-orange-500" />,
    title: "Explore India",
    desc: "Discover beautiful places across every state.",
  },
  {
    icon: <Building2 size={50} className="text-red-500" />,
    title: "Best Destinations",
    desc: "Handpicked tourist spots for every traveler.",
  },
  {
    icon: <Compass size={50} className="text-blue-500" />,
    title: "Easy Planning",
    desc: "Find places quickly and plan your trip easily.",
  },
];

  return (
    <section className="py-16 px-6 md:px-12 bg-orange-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose TravelBharat?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-bold mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-500">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;