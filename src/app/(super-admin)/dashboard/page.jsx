"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const SuperAdminDashboard = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/dashboard") {
      router.push("/dashboard/company/list");
    }
  }, [pathname, router]);

  return <></>;
};

export default SuperAdminDashboard;
