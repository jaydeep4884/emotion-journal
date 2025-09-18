import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";
import JournalPage from "../components/ui/JournalPage";

const Home = ({ mode, setMode }) => {
  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <Hero />
      <JournalPage />
      <Footer />
      {/* rest of your page */}
    </>
  );
};

export default Home;
