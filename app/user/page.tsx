"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/reactUseQueryFunc"
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";
import { UserSchema } from "@/src/utils/zodSchemas/UserSchema";

const User = () => {
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['user'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/user/me/1`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer xxxxxxxxxxx.xxxxxxxxxxxxx.xxxxxxxxxxxxxxx` 
    },
  }, UserSchema),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <div>{t('loading')}</div>
  if (isError && !data) return <div>{t('errorOccurred')}</div>

  return (
    <div>
      <h1>{t('userCount')}</h1>
      {/* Wczytuję wszystkie elementy przekazanych danych */}
        <p>{data?.name}, {data?.email}</p>
    </div>
  )
}

export default User