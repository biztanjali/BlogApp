"use client"

import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.scss";

export interface Post {
  _id: string;
  desc: string;
  slug: string;
  title: string;
  userid: string;
  img: string;
}

export default async function BlogPage() {
  // const posts: Post[]  = await getPosts();
  console.log("this is parent client");
  return (
    <div className="flex flex-row flex-wrap">
      <PostCard />;
      {/* {posts?.map((post) => {
      })} */}
    </div>
  );
}
