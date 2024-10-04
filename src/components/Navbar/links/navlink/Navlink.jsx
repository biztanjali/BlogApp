import Link from "next/link";
import styles from "./navlink.module.scss"

export default function Navlink({item}) {
  return (
    <div>
       <Link
      href={item.path}
      className={`${styles.container}`}
    >
      {item.title}
    </Link>
    </div>
  )
}
