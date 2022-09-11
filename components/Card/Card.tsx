import ImageAvatar from "./image-victor.jpg";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.avatar} src={ImageAvatar.src} />
        <div className={styles.info}>
          <h1 className={styles.name}>
            Victor Crest <span className={styles.age}>26</span>
          </h1>
          <h2 className={styles.location}>London</h2>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.stats}>
        <div className={styles.statistic}>
          <h1 className={styles.statistic__count}>80K</h1>
          <h2 className={styles.statistic__label}>Followers</h2>
        </div>
        <div className={styles.statistic}>
          <h1 className={styles.statistic__count}>803K</h1>
          <h2 className={styles.statistic__label}>Likes</h2>
        </div>
        <div className={styles.statistic}>
          <h1 className={styles.statistic__count}>1.4K</h1>
          <h2 className={styles.statistic__label}>Photos</h2>
        </div>
      </div>
    </div>
  );
}
