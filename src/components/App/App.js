import './App.scss';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import Features from '../Features/Features'

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <Features />
    </div>
  );
}

export default App;
