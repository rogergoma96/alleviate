import styles from "./Testimonials.module.scss";

const Testimonials = () => (
  <section id="Testimonials" className={styles.container}>
    <h2 className="text-title-l">Testimonials</h2>
    <div className={styles.testimonials}>
      <div className={styles.testimonial}>
        <p className="text-body-cormorant">
          “WOW! I am so glad I chose to get my house cleaned. It was really easy
          to book and they did a great job.”
        </p>
        <p className="text-subtitle">– SHIVANEE</p>
      </div>
      <div className={styles.testimonial}>
        <p className="text-body-cormorant">
          “I was going to host a lot of family for my son's graduation so I did
          deep clean and it was amazing. My house was spotless!
        </p>
        <p className="text-subtitle">– DELANEY</p>
      </div>
      <div className={styles.testimonial}>
        <p className="text-body-cormorant">
          “Coming home to a clean house is a great feeling. They are quick and
          get the little things”.
        </p>
        <p className="text-subtitle">– ALIYAH</p>
      </div>
      <div className={styles.testimonial}>
        <p className="text-body-cormorant">
          “I am extremely busy working and tending to my family so I went with
          the bi-weekly clean. It’s been 2 months now and they have saved me so
          a lot of time and energy”
        </p>
        <p className="text-subtitle">– LINDA</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
