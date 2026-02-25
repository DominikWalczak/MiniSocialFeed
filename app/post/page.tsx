"use client";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { QueryFetch } from "@/src/utils/extractedFunctions"
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";


import { PostItemSchema, PostListSchema } from "@/src/utils/zodSchemas/Schema";
import PostList from "../components/post/PostList";


const PostSite = () => {

  const token = Cookies.get("accessToken");

  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['posts'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/post/`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
  }, PostListSchema),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <div>{t('loading')}</div>
  if (isError && !data) return <div>{t('errorOccurred')}</div>
    
  if (data) {
    return (
      <div className="flex m-2 min-h-screen items-center justify-center">
          <PostList data={data}/>
      </div>
    )
  }
}

export default PostSite