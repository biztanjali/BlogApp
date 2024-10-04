import Links from "./links/Links";

import styles from "./navbar.module.scss"


export default function Navbar() {
  return (
    <div className={`${styles.container} width-100 flex flex-align-center flex-justify-between`}>
      <div className={`${styles.logo} width-30`}>Logo</div>
      <Links/>
    </div>
  )
}
