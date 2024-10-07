import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.scss";


async function getPostsData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json();
}

export default async function BlogPage() {
  const posts = await getPostsData();
    return (
      <div className="flex flex-row flex-wrap width-100 height-100">
        {posts.map((post: any)=> <PostCard imageLink="/contact.png" slug={post.id} title={post.title} description={post.body}/>)}
       
      </div>
    );
  }
  
