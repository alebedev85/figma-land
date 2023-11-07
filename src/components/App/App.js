import './App.scss';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import Features from '../Features/Features'
import Contents from '../Contents/Contents'
import Gallery from '../Gallery/Gallery'

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <Features />
      <Contents />
      <Gallery />
    </div>
  );
}

export default App;
