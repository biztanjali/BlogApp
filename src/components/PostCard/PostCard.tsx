import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.scss";

interface IPosts {
  imageLink: string;
  slug: any;
  title: string;
  description: string;
}

function PostCard({ imageLink, slug , title, description }: IPosts) {
  return (
    <div className="flex flex-column width-23 border-1 padding-4 margin-3">
      <div className="position-relative margin-b-2" style={{height: "15rem"}}>
        <Image src={imageLink} alt="Image" fill  />
      </div>
      <div className="text-5 padding-b-2">{title}</div>
      <div>{description}</div>
      <Link className={"text-underline"} href={`/blog/${slug}`}>
        READ MORE
      </Link>
    </div>
  );
}

export default PostCard;
