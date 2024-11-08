import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

export default function Button({ variant = "secondary", text = "" }) {
  return <button className={cn(styles.button, styles[variant])}>{text}</button>;
}

Button.propTypes = {
  variant: "primary" | "secondary",
  text: PropTypes.string,
};
