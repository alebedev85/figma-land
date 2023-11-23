import styles from './Testimonial.module.scss'

function Testimonial({icon, name, occupation, text}) {
  return (
    <article className={styles.testimonial} aria-label='testimonial'>
      <div className={styles.info}>
        <img className={styles.icon} src={icon} alt={`${name} icon`}></img>
        <h3 className={styles.name }>{name}</h3>
        <p className={styles.occupation}>{occupation}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  )
}

export default Testimonial