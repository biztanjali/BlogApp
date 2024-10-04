import Link from "next/link";

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
    <div className="padding-r-4">
        {links.map(({path , title} :{ path: string; title: string }, index:number) => (
          <Link key={`Link${index}`} href={path} className="padding-r-3">{title}</Link>
        ))}
    </div>
  )
}
