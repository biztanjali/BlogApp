import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.scss";

interface IPosts {
  imageLink: string;
  slug: any;
}

function PostCard({ imageLink, slug }: IPosts) {
  console.log(imageLink)
  return (
    <div className={`flex flex-column width-25 ${styles.container}`}>
      <div className="width-100 height-100 position-relative">
     <Image src={"https://images.unsplash.com/photo-1726767305248-e3cfaf9c98b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={slug} fill className="padding-b-4"/>
      </div>
      <Link className={"text-underline"} href={`/blog/${slug}`}>
        READ MORE
      </Link>
    </div>
  );
}

export default PostCard;
