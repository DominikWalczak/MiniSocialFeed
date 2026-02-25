"use client";
import Avatar from "./components/ui/Avatar";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Button from "./components/ui/Button"
import Input from "./components/ui/Input";
import Alert from "./components/ui/Alert";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="m-2">
      <div className="bg-amber-950 text-4xl font-bold">
        {t('helloWorld')}
      </div>
      <div>
        <Link className="m-3 bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded" href="/user">user/me</Link>
      </div>
      <div>
        <Link className="m-3 bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded" href="/login">login</Link>
      </div>
      <div>
        <Link className="m-3 bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded" href="/post">posts</Link>
      </div>
        <Button data={{variant: "danger", size: "sm", content: "Button", isLoading: true, disabled: false,}}/>
        <Avatar data={{size: "sm", name: "Dominik", vorname: "Walczak"}}/>
        {/* <Input id="2" label="Adres email"/> */}
        <Alert data={{text: "text", type: "success"}} onClose={()=>{}}/>
    </div>
  );
}
