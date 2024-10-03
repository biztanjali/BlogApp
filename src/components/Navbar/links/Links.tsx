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
    <div>
        {links.map(({path , title} :{ path: string; title: string }, index:number) => (
          <Link key={`Link${index}`} href={path}>{title}</Link>
        ))}
    </div>
  )
}
