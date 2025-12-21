"use client";

import { useStringKeys } from "@/src/i18n/i18nKeys";
import Link from "next/link";

export default function Page() {
  const stringKeys = useStringKeys();
  return (
    <div className="flex -mx-2">
      <div className="bg-amber-950 text-4xl font-bond">
        {stringKeys.helloWorld}
      </div>
      <div>
        <Link className="m-3 bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded" href="/user">user/me</Link>
      </div>
      <div>
        <Link className="m-3 bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded" href="/login">login</Link>
      </div>
    </div>
  );
}
