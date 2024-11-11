import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import Features from "../components/Features/Features";
import Contents from "../components/Contents/Contents";
import Gallery from "../components/Gallery/Gallery";
import Partners from "../components/Partners/Partners";
import Testimonials from "../components/Testimonials/Testimonials";
import Offer from "../components/Offer/Offer";
import Footer from "../components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
