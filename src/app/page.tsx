import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import heroGiff from "../../public/hero.gif"; 
import brandImage from "../../public/brands.png";
 

export default function Home() {
  return (
    <div className={"flex flex-row flex-align-center width-100 height-100"}>
      <div className={" width-50 height-100 flex flex-column"}>
        <div className={"text-bold text-25 padding-b-8"}>Creative Thoughts Agency</div>
        <div className={"padding-b-8"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </div>
        <div className="flex flex-row flex-justify-between width-40 padding-b-8">
          <CustomButton  buttonText="Learn More" secondaryButton noOutline circular/>
          <CustomButton buttonText="Contact" greyButton noOutline circular/>
        </div>
      </div>
      <div className={"width-50 position-relative height-100 "}>
        <Image src={heroGiff} alt="heroGif" fill/>
      </div>
    </div>
  );
}
