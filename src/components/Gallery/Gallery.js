import styles from './Gallery.module.scss';
import Rectangle_1 from '../../images/Rectangle 1.png'
import Rectangle_2 from '../../images/Rectangle 2.png'
import Rectangle_3 from '../../images/Rectangle 3.png'
import Rectangle_4 from '../../images/Rectangle 4.png'
import Rectangle_5 from '../../images/Rectangle 5.png'
import Rectangle_6 from '../../images/Rectangle 6.png'
import Rectangle_7 from '../../images/Rectangle 7.png'

function Gallery() {

  return (
    <section className={styles.gallery} aria-label='gallery'>
      <h2 className={`${styles.headline} headline`}>Gallery</h2>
      <p className={`${styles.sub} sub`}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <ul className={`${styles.cards} list`}>
        <li>
          <img className={styles.imag} alt='Rectangle_1' src={Rectangle_1}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_2' src={Rectangle_2}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_3' src={Rectangle_3}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_4' src={Rectangle_4}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_5' src={Rectangle_5}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_6' src={Rectangle_6}/>
        </li>
        <li>
          <img className={styles.imag} alt='Rectangle_7' src={Rectangle_7}/>
        </li>
      </ul>
      <button className={`${styles.button} button`}>See more</button>
    </section >
  )
}

export default Gallery;