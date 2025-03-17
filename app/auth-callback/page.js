"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingPing from "@/components/LoadingPing";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");
    const redirect = searchParams.get("redirect");

    if (token && refreshToken) {
      // localStorage.setItem("accessToken", token);
      // localStorage.setItem("refreshToken", refreshToken);
      router.push(redirect || "/dashboard");
    } else {
      router.push("/login");
    }
  }, [searchParams, router]);

  return <LoadingPing />;
}
