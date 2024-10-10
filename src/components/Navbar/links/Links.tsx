import Navlink from "./navlink/Navlink";

import styles from "../navbar.module.scss"
import CustomButton from "@/components/CustomButton";

export default function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];


  //temporary
  const session = true;
  const isAdmin = true;
  return (
    <div className="width-100 flex flex-justify-end flex-align-center">
        {links.map((item:any, index:number) => (
        <Navlink item={item} key={item.title}/>
        ))}
        {session ? (
          <>
          {isAdmin &&  <Navlink item={{title: "Admin" , path:"/admin"}}/>}
         <CustomButton buttonText="Logout" greyButton textSmall />
          </>
        ) : (
           <Navlink item={{title: "Login" , path:"/login"}}/>
        )}
    </div>
  )
}
