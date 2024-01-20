import CareersInYourHand from "./components/carreersInYourHand/CareersInYourHand";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Join from "./components/join/Join";
import Nav from "./components/nav/Nav";
import Stats from "./components/stats/Stats";
import WeHelp from "./components/wehelp/WeHelp";

function App() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <CareersInYourHand />
      <Stats />
      <WeHelp />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
