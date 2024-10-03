import Image from "next/image";
import styles from "./home.module.scss";
import CustomButton from "@/components/CustomButton";
import heroGiff from "../../public/hero.gif"; 
import brandImage from "../../public/brands.png";
 

export default function Home() {
  return (
    <div className={`${styles.container} flex flex-row flex-align-center padding-2`}>
      <div className={`${styles.textContainer} width-50 height-100 flex flex-column padding-l-4 flex-justify-center`}>
        <div className={"text-bold text-25 padding-b-8"}>Creative Thoughts Agency.</div>
        <p className={"padding-b-8"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex flex-row flex-justify-between width-40 padding-b-8">
          <CustomButton baseclassname={styles.button} buttonText="Learn More" secondaryButton noOutline circular/>
          <CustomButton baseclassname={styles.button} buttonText="Contact" greyButton noOutline circular/>
        </div>
        <div className="width-80">
          <Image src={brandImage} alt="brands" className={"width-100"}/>
        </div>
      </div>
      <div className={`${styles.imgContainer} width-50 position-relative height-100`}>
        <Image src={heroGiff} alt="heroGif"  className={"width-80 height-80"} />
      </div>
    </div>
  );
}
