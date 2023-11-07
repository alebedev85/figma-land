import './Card.scss';

function Card({headline, sub, button_text, img, gap}) {

  return (
    <section className='card' aria-label='card' style={{ gap: gap}}>
      <div className='card_text'>
        <h3 className='card__headline'>{headline}</h3>
      <p className='card__sub'>{sub}</p>
      </div>
      <button className='card__button button'>{button_text}</button>
      <img className='card__image' src={img}></img>
    </section >
  )
}

export default Card;