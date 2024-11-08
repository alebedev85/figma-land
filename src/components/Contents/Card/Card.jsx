import Button from "../../ui/Button/Button";
import styles from "./Card.module.scss";

function Card({ headline, sub, button_text, img, gap }) {
  return (
    <section className={styles.card} aria-label="card" style={{ gap: gap }}>
      <div className={styles.text}>
        <h3 className={styles.headline}>{headline}</h3>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Button variant='primary' text={button_text}/>
      <img className={styles.image} src={img} alt="CardPic"></img>
    </section>
  );
}

export default Card;
