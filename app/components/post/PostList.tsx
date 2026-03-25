"use client";

import type { PostListType } from "@/src/utils/zodSchemas/Schema";
import PostItem from "./PostItem";

const PostList = ({ data }: { data: PostListType }) => {

  return (
    <div className="bg-primary w-xl flex flex-col items-center justify-center p-10 gap-3 rounded-3xl">
      {data.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  )
}

export default PostList