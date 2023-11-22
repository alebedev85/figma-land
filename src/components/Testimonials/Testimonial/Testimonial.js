import styles from './Testimonial.module.scss'

function Testimonial({icon, name, occupation, text}) {
  return (
    <section className={styles.testimonial} aria-label='testimonial'>
      <div className={styles.container}>
        <img className={styles.icon} stc={icon} alt={`${name} icon`}></img>
        <h3 className={`${styles.headline} headline`}>{name}</h3>
        <p className={`${styles.sub} sub`}>{occupation}</p>
      </div>
      <p className={`${styles.sub} sub`}>{text}</p>
    </section>
  )
}

export default Testimonial