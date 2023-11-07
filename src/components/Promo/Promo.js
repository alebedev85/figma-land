import './Promo.scss';
import screens from '../../images/screens.svg'

function Promo() {

  return (
    <section className='promo' aria-label='Project presentation'>
      <h2 className='promo__headline'>Work at the speed of thought</h2>
      <p className='promo__sub'>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <div className='promo__buttons'>
        <button className='promo__button_try button'>
          <p className='promo__button__text'>Try For Free</p>
        </button>
        <button className='promo__button_learn button'>
          <p className='promo__button__text'>Learn More</p>
        </button>
      </div>
      <div className='promo__container'>
        <img className='promo__screens' src={screens} alt='Presentation of Screens' />
      </div>
    </section >
  )
}

export default Promo;