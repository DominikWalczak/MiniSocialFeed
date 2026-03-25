"use client";

import type { PostItemType } from "@/src/utils/zodSchemas/Schema";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

const PostItem = ({ post }: { post: PostItemType }) => {

  const { t } = useTranslation();

  return (
    <div key={post.id} className="flex-col w-full bg-primary-light rounded-3xl shadow-[primary] p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-x-2">
          <Avatar data={{size: "sm", name: post.user.name, vorname: post.user.vorname}}/>
          <h1>{post.user.name} {post.user.vorname}</h1>
        </div>
        <h1>{t('CreatedAt')}: {new Date(post.createdAt).toLocaleDateString('pl-PL')}</h1>
      </div>
      <div className="p-4">{t('PostContent')}: {post.content}</div>
      <div className="flex justify-between border-t py-1">
        <Button data={{variant: "primary", size: "sm", content: t('like'), isLoading: false, disabled: false,}}/>
        <Button data={{variant: "primary", size: "sm", content: t('comment'), isLoading: false, disabled: false,}}/>
      </div>
    </div>
  )
}

export default PostItem