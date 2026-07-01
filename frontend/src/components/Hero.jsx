import { Link } from "react-router-dom";

function Hero() {
  return (
    <section data-aos="fade-up" className="relative h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/taj-mahal.png"
        alt="Taj Mahal"
        alt="India Travel"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-5 md:px-16">
        <div className="max-w-2xl">
          <p className="text-orange-400 font-semibold text-lg mb-4">
            Explore Incredible India 🇮🇳
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Discover Beautiful Places Across India
          </h1>

          <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl">
            Find tourist destinations, hidden gems and unforgettable travel
            experiences from every state of India.
          </p>

          <div data-aos="zoom-in" className="flex flex-col sm:flex-row gap-4 mt-8">
  <Link
    to="/destinations"
    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 text-center"
  >
    Explore Now
  </Link>

  <Link
    to="/about"
    className="px-6 md:px-8 py-3 md:py-4 border-2 border-orange-500 text-orange-500 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
  >
    Learn More
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
