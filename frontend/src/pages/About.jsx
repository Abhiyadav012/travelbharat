import { Link } from "react-router-dom";

function About() {
  return (
    <div data-aos="fade-up" className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About TravelBharat
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            TravelBharat is a modern tourism platform that helps travelers
            discover India's rich culture, heritage, nature and hidden
            destinations in one place.
          </p>

          <Link
            to="/destinations"
            className="inline-block mt-10 px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold hover:scale-105 transition"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div data-aos="fade-right" className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-6">🎯 Our Mission</h2>

          <p className="text-gray-600 text-lg leading-8">
            Our mission is to build a single platform where anyone can explore
            India's tourist destinations state-wise and city-wise. We aim to
            provide reliable information, beautiful visuals and a simple user
            experience for travelers, students and tourism enthusiasts.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🗺</div>
            <h3 className="text-2xl font-bold mb-3">State-wise Guide</h3>
            <p className="text-gray-600">
              Explore destinations across different Indian states.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🏛</div>
            <h3 className="text-2xl font-bold mb-3">Heritage Sites</h3>
            <p className="text-gray-600">
              Discover forts, monuments and UNESCO heritage places.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold mb-3">Nature & Adventure</h3>
            <p className="text-gray-600">
              Mountains, waterfalls, beaches and adventure spots.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3">Travel Details</h3>
            <p className="text-gray-600">
              Best time to visit, nearby attractions and destination details.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why Choose TravelBharat?
            </h2>

            <div className="space-y-5 text-lg text-gray-700">
              <p>✅ Clean & Modern Interface</p>
              <p>✅ State-wise Tourist Information</p>
              <p>✅ Beautiful Destination Images</p>
              <p>✅ Mobile Friendly Design</p>
              <p>✅ Fast & Easy Navigation</p>
            </div>
          </div>

          <img
            src="/india.jpg"
            alt="India Tourism"
            className="rounded-3xl shadow-xl h-[420px] object-cover w-full"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <h2 className="text-5xl font-bold text-orange-500">4+</h2>
              <p className="mt-3 text-gray-600 font-semibold">States</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <h2 className="text-5xl font-bold text-orange-500">12+</h2>
              <p className="mt-3 text-gray-600 font-semibold">Destinations</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <h2 className="text-5xl font-bold text-orange-500">4+</h2>
              <p className="mt-3 text-gray-600 font-semibold">Cetegories</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <h2 className="text-5xl font-bold text-orange-500">100%</h2>
              <p className="mt-3 text-gray-600 font-semibold">Responsive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Future Enhancements
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <p>🗺 Google Maps Integration</p>
            <p>🏨 Hotel Booking</p>
            <p>🧳 Travel Planner</p>
            <p>🌐 Multi-language Support</p>
            <p>⭐ User Reviews & Ratings</p>
            <p>🚆 Transport Integration</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 py-20">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Explore India?
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Discover beautiful destinations and plan your next journey with
            TravelBharat.
          </p>

          <Link
            to="/destinations"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition inline-block"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
