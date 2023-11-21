import styles from './Promo.module.scss';
import screens from '../../images/screens.svg'

function Promo() {

  return (
    <section className={styles.promo} aria-label='Project presentation'>
      <h2 className={styles.headline}>Work at the speed of thought</h2>
      <p className={styles.sub}>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <div className={styles.buttons}>
        <button className={`button ${styles.button_try}`}>
          <p className={styles.button__text}>Try For Free</p>
        </button>
        <button className={`button ${styles.button_learn}`}>
          <p className={styles.button__text}>Learn More</p>
        </button>
      </div>
      <div className={styles.container}>
        <img className={styles.screens} src={screens} alt='Presentation of Screens' />
      </div>
    </section >
  )
}

export default Promo;