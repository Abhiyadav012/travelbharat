function Footer() {
  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">
          TravelBharat 🇮🇳
        </h2>

        <p className="text-gray-400 mb-6">
          Discover the beauty of India, one destination at a time.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            States
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Destinations
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            About
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 TravelBharat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;