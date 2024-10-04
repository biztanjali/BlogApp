import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPosts {
  imageLink: string;
  slug: any;
}

function PostCard({ imageLink, slug }: IPosts) {
  return (
    <div className="flex flex-column">
      <div>
        <Image src={imageLink} alt="Image" />
      </div>
      <div>Title</div>
      <div> Desciption</div>
      <Link className={"text-underline"} href={`/blog/${slug}`}>
        READ MORE
      </Link>
    </div>
  );
}

export default PostCard;
