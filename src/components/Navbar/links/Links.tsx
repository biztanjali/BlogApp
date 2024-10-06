import Navlink from "./navlink/Navlink";

import styles from "../navbar.module.scss"

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
    <div className="width-100 flex flex-justify-end">
        {links.map((item:any, index:number) => (
        <Navlink item={item} key={item.title}/>
        ))}
        {session ? (
          <>
          {isAdmin &&  <Navlink item={{title: "Admin" , path:"/admin"}}/>}
          <button className={"cursor-pointer"}>Logout</button>
          </>
        ) : (
           <Navlink item={{title: "Login" , path:"/login"}}/>
        )}
    </div>
  )
}
