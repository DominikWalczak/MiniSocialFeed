"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/reactUseQueryFunc"
import { BACKEND_URL } from "@/env";
import { useStringKeys } from "@/src/i18n/i18nKeys";

const User = () => {
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['user'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/user/me`, { method: "GET"}),
  enabled: true
  });
  // definiuję stringKeys aby uzyskać dostęp do określonych tłumaczeń językowych poprzez obiekt
  const stringKeys = useStringKeys(data?.length ?? 0);

  if (isLoading) return <div>{stringKeys.loading}</div>
  if (isError) return <div>{stringKeys.errorOccurred}</div>

  return (
    <div>
      <h1>{stringKeys.userCount}</h1>
      {/* Wczytuję wszystkie elementy przekazanych danych */}
      {data?.map((d: any) => (
        <p key={d.id}>{d.name}, {d.email}</p>
      ))}
    </div>
  )
}

export default User