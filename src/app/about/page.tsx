import Image from "next/image";
import aboutImage from "../../../public/about.png";

export default function AboutPage() {
    return (
      <div className="width-100 height-100 flex flex-row flex-align-center ">
       
      <div className="flex flex-column width-60 flex-justify-between">
        <div className={"text-default-color text-5 text-bold "}>About Agency</div>
        <div className="text-18 padding-b-4">
          We create digital ideas that are bigger, bolder, braver and better.
        </div>
        <div className="text-5 line-h-7">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </div>
        <div className="flex flex-row flex-justify-between">
        <div className="flex flex-column">
            <div className="text-8 text-bold text-default-color">10 K+</div>
            <div>Year of experience</div>
          </div>
          <div className="flex flex-column">
            <div className="text-8 text-bold text-default-color">10 K+</div>
            <div>Year of experience</div>
          </div>
          <div className="flex flex-column">
            <div className="text-8 text-bold text-default-color">10 K+</div>
            <div>Year of experience</div>
          </div>
        </div>
      </div>
      <div className="width-40 height-100 position-relative">
      <Image src={aboutImage} alt="About" fill />
      </div>
      </div>
    );
  }
  