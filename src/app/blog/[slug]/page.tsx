import { getPost } from "@/lib/data";
import styles from "./singlePost.module.scss"
import { Suspense } from "react";
import Image from "next/image";


const SinglePostPage = async ({ params }:any) => {
  const { slug } = params;

  const post = await getPost(slug);
console.log("singlepost" , post);
const {title , desc , img, userId}= post

  return (
    <div className={""}>
      {img && (
        <div className={styles.imgContainer}>
          <Image src={img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={userId} /> 
             </Suspense>
          )} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {createdAt.toString().slice(4, 16)} */}
            </span>
          </div>
        </div>
        <div className={styles.content}>{desc}</div>
      </div>  
    </div>
  );
};

export default SinglePostPage;