import Poster from "../../images/Line Chart 1.png";
import Button from "../ui/Button/Button";

import styles from "./Offer.module.scss";

export default function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.info}>
        <p className={styles.text}>OpenType features and Variable fonts</p>
        <Button variant="primary" text="Try For Free"/>
      </div>
      <div className={styles.poster}>
        <img className={styles.img} src={Poster} alt="Poster" />
      </div>
    </div>
  );
}
