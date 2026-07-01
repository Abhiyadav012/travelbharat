import { useState, useEffect } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Admin() {
  const [formData, setFormData] = useState({
    placeName: "",
    state: "",
    city: "",
    category: "",
    description: "",
    bestTimeToVisit: "",
    entryFee: "",
    timings: "",
    mapLink: "",
    image: "",
  });
  const [recentPlaces, setRecentPlaces] = useState([]);
  const [stats, setStats] = useState({
    totalPlaces: 0,
    totalCategories: 0,
  });
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await API.put(`/places/${editingId}`, formData);
        alert("Destination Updated Successfully ✅");
      } else {
        await API.post("/places", formData);
        alert("Destination Added Successfully ✅");
      }

      setFormData({
        placeName: "",
        state: "",
        city: "",
        category: "",
        description: "",
        bestTimeToVisit: "",
        entryFee: "",
        timings: "",
        mapLink: "",
        image: "",
      });

      setEditingId(null);
      fetchRecentPlaces();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchRecentPlaces();
  }, []);

  const fetchRecentPlaces = async () => {
    setLoading(true);
    try {
      const res = await API.get("/places");

      setRecentPlaces(res.data);

      setStats({
        totalPlaces: res.data.length,
        totalCategories: [...new Set(res.data.map((p) => p.category))].length,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (place) => {
    setFormData(place);
    setEditingId(place._id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this destination?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/places/${id}`);

      fetchRecentPlaces();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-16 w-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
     <div className="md:hidden min-h-screen flex items-center justify-center bg-orange-50 px-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-3">💻 Desktop Required</h1>

        <p className="text-gray-600">
          Admin Dashboard is available only on desktop or laptop.
        </p>
      </div>
    </div>

    {/* Desktop Screen */}
    <div className="hidden md:flex min-h-screen bg-gradient-to-br from-orange-50 to-white">

    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 to-white">
      {/* Sidebar */}
      <div
        data-aos="fade-down"
        className="w-72 bg-white shadow-2xl p-6 sticky top-0 h-screen"
      >
        <h1 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          TravelBharat
        </h1>

        <div className="space-y-3">
          <Link
            to="/admin"
            className="block p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/destinations"
            className="block p-4 rounded-xl hover:bg-orange-100 transition"
          >
            📍 Destinations
          </Link>

          <Link
            to="/categories"
            className="block p-4 rounded-xl hover:bg-orange-100 transition"
          >
            🏷 Categories
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-3xl md:text-5xl font-bold">Admin Dashboard</h1>

          <p className="text-gray-500 mt-2">Manage destinations across India</p>
        </div>

        {/* Stats Cards */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <Link
            to="/destinations"
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-4xl">📍</p>
            <p className="text-gray-500 mt-3">Destinations</p>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
              {stats.totalPlaces}
            </h2>

            <p className="text-orange-500 mt-4 font-semibold opacity-0 group-hover:opacity-100 transition">
              Manage →
            </p>
          </Link>

          <Link
            to="/categories"
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-4xl">🏷</p>
            <p className="text-gray-500 mt-3">Categories</p>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
              {stats.totalCategories}
            </h2>

            <p className="text-orange-500 mt-4 font-semibold opacity-0 group-hover:opacity-100 transition">
              Explore →
            </p>
          </Link>

          <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl md:text-5xl">🟢</span>

              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                Active
              </span>
            </div>

            <p className="text-gray-500 mt-4">Dashboard Status</p>

            <h2 className="text-3xl font-bold mt-2">System Online</h2>

            <p className="text-green-600 mt-4">✔ All Services Running</p>
          </div>
        </div>

        {/* Add Destination Form */}
        <div
          data-aos="fade-right"
          className="bg-white rounded-3xl shadow-xl p-8 mb-10"
        >
          <h2 className="text-3xl font-bold mb-6">Add New Destination</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="placeName"
              value={formData.placeName}
              onChange={handleChange}
              placeholder="Place Name"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            >
              <option value="">Select Category</option>
              <option value="Heritage">Heritage</option>
              <option value="Nature">Nature</option>
              <option value="Religious">Religious</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mt-5 p-4 border rounded-xl outline-none focus:border-orange-500"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <input
              type="text"
              name="bestTimeToVisit"
              value={formData.bestTimeToVisit}
              onChange={handleChange}
              placeholder="Best Time To Visit"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              placeholder="Entry Fee"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="timings"
              value={formData.timings}
              onChange={handleChange}
              placeholder="Timings"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="mapLink"
              value={formData.mapLink}
              onChange={handleChange}
              placeholder="Google Map Link"
              className="p-4 border rounded-xl outline-none focus:border-orange-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition"
          >
            {editingId ? "Update Destination" : "Add Destination"}
          </button>
        </div>

        {/* Recent Destinations */}
        <div
          data-aos="fade-left"
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Recent Destinations</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Place</th>
                  <th className="text-left py-4">Location</th>
                  <th className="text-left py-4">Category</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {recentPlaces.map((place) => (
                  <tr key={place._id} className="border-b hover:bg-orange-50">
                    <td className="py-4">{place.placeName}</td>

                    <td>{place.city}</td>

                    <td>{place.category}</td>

                    <td className="text-green-500 font-semibold">Published</td>

                    <td className="space-x-2">
                      <button
                        onClick={() => handleEdit(place)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(place._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Admin;
