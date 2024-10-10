import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.scss";
import { Post } from "@/app/blog/page";

// interface IPosts {
//   imageLink: string;
//   slug: any;
//   title : string
// }

function PostCard() {
  console.log("this is children client",)
  return (
    <div></div>
    // <div className={`flex flex-column width-25 ${styles.container}`}>
    //   <div className="width-100 height-100 position-relative">
    //  <Image src={post.img} alt={post.slug} fill className="padding-b-4"/>
    //   </div>
    //   <div className="flex flex-justify-between">
    //    <div>{post.title}</div>
    //   <Link className={"text-underline"} href={`/blog/${post.slug}`}>
    //     READ MORE
    //   </Link>
    //   </div>
    // </div>
  );
}

export default PostCard;
