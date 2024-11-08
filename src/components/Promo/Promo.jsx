import Button from '../ui/Button/Button';
import screens from '../../images/screens.svg'

import styles from './Promo.module.scss';

function Promo() {

  return (
    <section className={styles.promo} aria-label='Project presentation'>
      <h2 className={styles.headline}>Work at the speed of thought</h2>
      <p className={styles.sub}>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <div className={styles.buttons}>
        <Button variant='primary' text='Try For Free'/>
        <Button  text='Learn More'/>
      </div>
      <div className={styles.container}>
        <img className={styles.screens} src={screens} alt='Presentation of Screens' />
      </div>
    </section >
  )
}

export default Promo;