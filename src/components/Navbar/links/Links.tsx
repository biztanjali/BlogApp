import Link from "next/link";
import Navlink from "./navlink/Navlink";

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
  return (
    <div className="width-100 flex flex-justify-end">
        {links.map((item:any, index:number) => (
        <Navlink item={item} key={item.title}/>
        ))}
    </div>
  )
}
