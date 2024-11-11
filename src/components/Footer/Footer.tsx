import cn from "classnames";
import Map from "../../images/bx_bx-map.svg";
import Phone from "../../images/ic_baseline-phone-android.svg";
import Twitter from "../../images/twitter-outlined.svg";
import Facebook from "../../images/facebook-filled.svg";
import Linkedin from "../../images/linkedin-filled.svg";
import LinksList from "./LinksList/LinksList";

import styles from "./Footer.module.scss";

const list = [
  { name: "Home", link: "/" },
  { name: "Examples", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "Updates", link: "/" },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <LinksList title="Fingertipe" list={list} />
        <LinksList title="Resources" list={list} />
        <LinksList title="About" list={list} />
      </div>
      <ul className={`${styles.contacts} list`}>
        <li>
          <a href="/" className={cn(styles.link, styles.contact)}>
            <img className={styles.icon} src={Map} alt="Map" />
            <p className={styles.text}>7480 Mockingbird Hill undefined</p>
          </a>
        </li>
        <li>
          <a href="/" className={cn(styles.link, styles.contact)}>
            <img className={styles.icon} src={Phone} alt="Phone" />
            <p className={styles.text}>(239) 555-0108</p>
          </a>
        </li>
        <li>
          <ul className={`${styles.socialMedia} list`}>
            <li>
              <a href="/" className={styles.link}>
                <img className={styles.icon} src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="/" className={styles.link}>
                <img className={styles.icon} src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="/" className={styles.link}>
                <img className={styles.icon} src={Linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
