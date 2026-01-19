"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/reactUseQueryFunc"
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";


import PostItem from "../components/PostItem";
import { PostItemSchema } from "@/src/utils/zodSchemas/Schema";


const PostSite = () => {
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['posts'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/post/`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbm5hLm5vd2FrQHRlc3QucGwiLCJpYXQiOjE3Njg2MzEyMTQsImV4cCI6MTc2ODYzMTUxNH0.QyGLtmp1hbxF1ZC1mJAWQBZWKnMrYN5OT7d8-nkCarE` 
    },
  }, PostItemSchema),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <div>{t('loading')}</div>
  if (isError && !data) return <div>{t('errorOccurred')}</div>
    
  if (data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
          <PostItem data={data}/>
      </div>
    )
  }
}

export default PostSite