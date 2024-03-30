"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function SigOut() {
  const router = useRouter();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
    router.push("login");
  }, []);

  return (
    <>
      <h1> Saindo </h1>
    </>
  );
}
