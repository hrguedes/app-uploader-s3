"use client";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import FollowUp from "./followup/page";


export default function Home() {
  const router = useRouter();
  const {isLogged} = useContext(AuthContext);

  useEffect(() => {
    if (!isLogged)
      router.replace("exit");
  }, []);

  return (
    <>
      <FollowUp />
    </>
  );
}
