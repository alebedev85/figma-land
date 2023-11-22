import styles from './Partners.module.scss';
import Apple from '../../images/logos_apple-app-store.png'
import Apiary from '../../images/logos_apiary.png'
import Android from '../../images/logos_android-icon.png'
import Basecamp from '../../images/logos_basecamp.png'
import Airbnb from '../../images/logos_airbnb.png'
import IBM from '../../images/logos_ibm.png'

function Partners() {
  return (
    <section className={styles.partners} aria-label='partners'>
      <h2 className={`${styles.headline} headline`}>Partners</h2>
      <p className={`${styles.sub} sub`}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className={styles.brands}>
        <img className={styles.brand_1} src={Apple} alt='Apple'/>
        <img className={styles.brand_2} src={Apiary} alt='Apiary'/>
        <img className={styles.brand_3} src={Android} alt='Android'/>
        <img className={styles.brand_4} src={Basecamp} alt='Basecamp'/>
        <img className={styles.brand_5} src={Airbnb} alt='Airbnb'/>
        <img className={styles.brand_6} src={IBM} alt='IBM'/>
      </div>
      <button className={`${styles.button} button`}>All Partners</button>
    </section>
  )
}

export default Partners