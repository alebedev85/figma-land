import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
}

export default function Button({
  variant = "secondary",
  text = "",
}: ButtonProps) {
  return <button className={cn(styles.button, styles[variant])}>{text}</button>;
}
