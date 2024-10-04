import Image from "next/image";
import contactImage from "../../../public/contact.png";
import styles from "./contact.module.scss";
import CustomButton from "@/components/CustomButton";
// import { HookFormInput } from "@/components/HookForms";

export default function ContactPage() {
    return (
      <div className="flex flex-row width-100 height-100">
      <div className={"width-50 height-100 flex flex-justify-center flex-align-center"}>
        <Image src={contactImage} alt="contact" className={"width-50 height-50"} />
      </div>
      {/* <div className=""> */}
        <form action="" className={`width-50 height-80 padding-2 margin-t-4 flex flex-column flex-justify-between ${styles.form}`}>
          {/* <HookFormInput name="name" label="Name and Surname"/>
          <HookFormInput name="email" label="Email Address"/>
          <HookFormInput name="" label="Phone Number (Optional)"/> */}

          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <CustomButton buttonText="Send" secondaryButton circular />
        </form>
      {/* </div> */}
    </div>
    );
  }
  