import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";

const Home = ({ mode, setMode }) => {
  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <Hero />
      <Footer />
      {/* rest of your page */}
    </>
  );
};

export default Home;
