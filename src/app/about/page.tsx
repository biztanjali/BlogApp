import Image from "next/image";
import aboutImage from "../../../public/about.png";
import styles from "./style.module.scss";

export default function AboutPage() {
    return (
      <div className={styles.container}>
        AboutPage
        <Image src={aboutImage} alt="About" />
      </div>
    );
  }
  