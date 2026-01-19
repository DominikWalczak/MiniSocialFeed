"use client";

import type { PostItemType } from "@/src/utils/zodSchemas/Schema";
import { useTranslation } from "react-i18next";

const PostItem = ({ data }: { data: PostItemType }) => {

  const { t } = useTranslation();
  return (
    <div className="bg-[rgb(8,81,156)] text-[rgb(236,231,242)] w-xl flex flex-col items-center justify-center p-10 gap-3 rounded-3xl">
      {data.map((post) => (
        <div key={post.id} className="w-full bg-[rgb(33,113,181)] rounded-3xl shadow-[rgb(33,113,181) p-6">
          <div>{t('AuthorsId')}: {post.authorId}</div>
          <div>{t('CreatedAt')}: {post.createdAt}</div>
          <div>{t('PostContent')}: {post.content}</div>
        </div>
    ))}
    </div>
  )
}

export default PostItem