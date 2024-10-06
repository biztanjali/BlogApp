import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.scss";



export default async function BlogPage() {
  const posts = await getPosts(); // Fetch posts directly in the component
console.log(posts)
  return (
<div className="flex flex-row flex-wrap">
  {posts?.map(({slug , img, _id}:any)=> {
  console.log("post", slug , img)
    return <PostCard imageLink={img} slug={slug} key={_id}/>
  })}
</div>

  )
 
}
