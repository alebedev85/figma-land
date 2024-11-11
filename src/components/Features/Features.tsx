import Frame_19 from '../../images/Frame 19.svg'
import feature_icon_1 from '../../images/feature_icon_1.svg'
import feature_icon_2 from '../../images/feature_icon_2.svg'
import feature_icon_3 from '../../images/feature_icon_3.svg'

import styles from './Features.module.scss';

function Features() {

  return (
    <section className={styles.features} aria-label='Project features'>
      <h2 className={(`headline ${styles.headline}`)}>FEATURES</h2>
      <p className={`sub ${styles.sub}`}>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <img className={styles.pic} src={Frame_19} alt='Сhat app screenshot' />
      <ul className={`${styles.list} list`}>
        <li className={styles.feature}>
          <img className={`${styles.feature__icon_1} ${styles.feature__icon}`} src={feature_icon_1} alt='spoon and knife' />
          <h3 className={styles.feature__headline}>
            A single source of truth
          </h3>
          <p className={styles.feature__sub}>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className={styles.feature}>
          <img className={`${styles.feature__icon_2} ${styles.feature__icon}`} src={feature_icon_2} alt='alien' />
          <h3 className={`${styles.feature__headline} ${styles.headline_intuitive}`}>
            Intuitive interface
          </h3>
          <p className={styles.feature__sub}>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className={`${styles.feature} ${styles.feature_up}`}>
          <img className={`${styles.feature__icon_3} ${styles.feature__icon}`} src={feature_icon_3} alt='infinity' />
          <h3 className={`${styles.feature__headline} ${styles.feature__headline_rules}`}>
            Or with rules
          </h3>
          <p className={styles.feature__sub}>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
      </ul>
    </section >
  )
}

export default Features;