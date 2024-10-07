import Image from "next/image";

async function getPostsData(slug: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export default async function PostDetail({ params }: any) {
  const postDetail = await getPostsData(params.slug);

  return (
    <div className="flex flex-row padding-4 width-100 height-100">
      <div className="width-40 height-100 position-relative">
        <Image src="/contact.png" alt="leftDetail" fill />
      </div>
      <div className={"width-60 height-100"}>
        <h1>{postDetail.title}</h1>
        {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={ "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
            </Suspense>
          )} */}
        {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div> */}
        <div className={""}>{postDetail.body}</div>
      </div>
    </div>
  );
}
