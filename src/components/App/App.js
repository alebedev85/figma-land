import './App.scss';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Features from '../Features/Features';
import Contents from '../Contents/Contents';
import Gallery from '../Gallery/Gallery';
import Partners from '../Partners/Partners';
import Testimonials from '../Testimonials/Testimonials';

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
    </div>
  );
}

export default App;
