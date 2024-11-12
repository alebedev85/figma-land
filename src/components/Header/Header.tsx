import cn from "classnames";
import Logo from "../../images/logo.svg";
import { ReactComponent as MenuButton } from "../../images/menu-button.svg";
import Button from "../ui/Button/Button";
import { useState } from "react";

import styles from "./Header.module.scss";

function Header() {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen)
  return (
    <header className={styles.header}>
      <a className="link" href="#">
        <img src={Logo} className={styles.logo} alt="Логотип сайта" />
      </a>
      <ul className={`list ${styles.navbar} ${isOpen ? styles.navbar_active : ""}`}>
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
      <div className={styles.buttons} >
        <Button variant="secondary" text="Login" />
        <button className={styles.menuButton} onClick={() => setOpen(!isOpen)}>
          <MenuButton />
        </button>
      </div>
    </header>
  );
}

export default Header;
