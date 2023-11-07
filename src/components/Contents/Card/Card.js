import './Card.scss';

function Card({headline, sub, button_text, img}) {

  return (
    <section className='card' aria-label='card'>
      <h3 className='card__headline'>{headline}</h3>
      <p className='card__sub'>{sub}</p>
      <button className='contents__button button'>{button_text}</button>
      <img className='card_image' src={img}></img>
    </section >
  )
}

export default Card;