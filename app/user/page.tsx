"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/reactUseQueryFunc"
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";

const User = () => {
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['user'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/user/me/1`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` 
    },
  }),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <div>{t('loading')}</div>
  if (isError) return <div>{t('errorOccurred')}</div>

  return (
    <div>
      <h1>{t('userCount')}</h1>
      {/* Wczytuję wszystkie elementy przekazanych danych */}
        <p>{data?.name}, {data?.email}</p>
    </div>
  )
}

export default User