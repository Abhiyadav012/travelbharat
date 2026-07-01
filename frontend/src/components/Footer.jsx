import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-8 md:py-10 px-5 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          TravelBharat 🇮🇳
        </h2>

        <p className="text-sm md:text-base text-gray-400 mb-6">
          Discover the beauty of India, one destination at a time.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-sm md:text-base">
  <Link
    to="/"
    className="hover:text-orange-400 transition"
  >
    Home
  </Link>

  <Link
    to="/destinations"
    className="hover:text-orange-400 transition"
  >
    Destinations
  </Link>

  <Link
    to="/categories"
    className="hover:text-orange-400 transition"
  >
    Categories
  </Link>

  <Link
    to="/about"
    className="hover:text-orange-400 transition"
  >
    About
  </Link>
</div>

        <p className="text-sm text-gray-500">
          © 2026 TravelBharat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;