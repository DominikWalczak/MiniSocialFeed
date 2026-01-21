"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/reactUseQueryFunc"
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";
import { UserSchema } from "@/src/utils/zodSchemas/UserSchema";

const User = () => {

  // uzyskuję dostęp do AccessTokenu przekazanego z Backendu
  const token = Cookies.get("accessToken");
  const id = Cookies.get("id");
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['user'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/user/me/${id}`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
  }, UserSchema),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <div>{t('loading')}</div>
  if (isError && !data) return <div>{t('errorOccurred')}</div>

  return (
    <div>
      {/* Wczytuję wszystkie elementy przekazanych danych */}
        <p>{data?.vorname} {data?.name}, {data?.email}</p>
    </div>
  )
}

export default User