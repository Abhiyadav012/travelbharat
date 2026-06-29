import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import States from "./components/States";
import Search from "./components/Search";
import { useState } from "react";

import Destinations from "./components/Destinations";
import Features from "./components/Features";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import DestinationsPage from "./pages/Destinations";
import StateDetails from "./pages/StateDetails";
import PlaceDetails from "./pages/PlaceDetails";
import Admin from "./pages/Admin";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Search search={search} setSearch={setSearch} />
              <States search={search} />
              <Destinations />
              <Features />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/destinations" element={<DestinationsPage />} />

        <Route path="/states/:stateName" element={<StateDetails />} />

        <Route path="/place/:placeId" element={<PlaceDetails />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
