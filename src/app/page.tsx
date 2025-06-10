"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/Home");
  };

  useEffect(() => {
    goToHome();
  }, []);

  return <></>;
}
