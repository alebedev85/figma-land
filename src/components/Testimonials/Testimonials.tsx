import avatar_1 from "../../images/avatar_1.png";
import avatar_2 from "../../images/avatar_2.png";
import avatar_3 from "../../images/avatar_3.png";
import avatar_4 from "../../images/avatar_4.png";

import Testimonial from "./Testimonial/Testimonial";

import styles from "./Testimonials.module.scss";

function Testimonials() {
  return (
    <section className={styles.section} aria-label="testimonials">
      <h2 className={`${styles.headline} headline`}>Testimonials</h2>
      <div className={styles.testimonials}>
        <Testimonial
          icon={avatar_1}
          name="Claire Bell"
          occupation="Designer"
          text="Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year. Slate helps you see how many more days
          you need to work to reach your financial goal for the month and year.your
          financial goal for the month and year."
        />
        <Testimonial
          icon={avatar_3}
          name="Ralph Fisher"
          occupation="Designer"
          text="Slate helps you see how many more days
            you need to work to reach your financial
            goal for the month and year. Slate helps
            you see how many more days
            you need to work to reach your financial
            goal for the month and year."
        />
        <Testimonial
          icon={avatar_2}
          name="Francisco Lane"
          occupation="Designer"
          text="Slate helps you see how many more days
            you need to work to reach your financial
            goal for the month and year. Slate helps
            you see how many more days
            you need to work to reach your financial
            goal for the month and year."
        />
        <Testimonial
          icon={avatar_4}
          name="Jorge Murphy"
          occupation="Designer"
          text="Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year. Slate helps you see how many more days
          you need to work to reach your financial goal for the month and year."
        />
      </div>
      <ul className={`${styles.list} list`}>
        <li></li>
      </ul>
    </section>
  );
}

export default Testimonials;
