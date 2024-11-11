import styles from "./Testimonial.module.scss";

interface TestimonialProps {
  icon: string;
  name: string;
  occupation: string;
  text: string;
}

function Testimonial({ icon, name, occupation, text }: TestimonialProps) {
  return (
    <article className={styles.testimonial} aria-label="testimonial">
      <div className={styles.info}>
        <img className={styles.icon} src={icon} alt={`${name} icon`}></img>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.occupation}>{occupation}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default Testimonial;
