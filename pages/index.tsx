import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
};

export default Home;
