import Hero from "../components/Hero";
import Search from "../components/Search";
import States from "../components/States";
import Destinations from "../components/Destinations";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home({ search, setSearch }) {
  return (
    <>
      <Hero />
      <Search search={search} setSearch={setSearch} />
      <States search={search} />
      <Destinations />
      <Features />
      <Footer />
    </>
  );
}

export default Home;