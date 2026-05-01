"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language?.split("-")[0];
    const supported = ["en", "jp", "pt"];
    const locale = supported.includes(lang) ? lang : "en";
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
