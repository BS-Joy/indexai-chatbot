"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingPing from "@/components/LoadingPing";
import { setCookiesAction } from "../actions/authActions";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const redirect = searchParams.get("redirect");

    if (accessToken && refreshToken) {
      setCookiesAction({ accessToken, refreshToken })
        .then((res) => {
          console.log(res);
          if (res.success) {
            router.push(redirect || "/dashboard");
          } else {
            router.push("/login");
          }
        })
        .catch((error) => {
          console.error("Failed to set cookies:", error);
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, [searchParams, router]);

  return <LoadingPing />;
}
