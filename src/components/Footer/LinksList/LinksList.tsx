import React from "react";

import styles from "./LinksList.module.scss";

interface LinksListProps {
  title: string;
  list: {
    name: string;
    link: string;
  }[];
}

export default function LinksList({ title, list }: LinksListProps) {
  return (
    <div className={styles.links}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`${styles.list} list`}>
        {list.map((item, index) => (
          <li key={index} className={styles.link}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
