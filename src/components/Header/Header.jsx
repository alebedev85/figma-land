import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import Button from "../ui/Button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <a className="link" href="#">
        <img src={logo} className={styles.logo} alt="Логотип сайта" />
      </a>
      <ul className={`list ${styles.navbar}`}>
        <li>
          <a className={`link ${styles.link}`} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={`link ${styles.link}`} href="#">
            Product
          </a>
        </li>
        <li>
          <a className={`link ${styles.link}`} href="#">
            About
          </a>
        </li>
        <li>
          <a className={`link ${styles.link}`} href="#">
            Contact
          </a>
        </li>
      </ul>
      <Button variant="secondary" text="Login"/>
    </header>
  );
}

export default Header;
