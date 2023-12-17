"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SuperAdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/company/list");
  }, [router]);

  return <></>;
};

export default SuperAdminDashboard;
