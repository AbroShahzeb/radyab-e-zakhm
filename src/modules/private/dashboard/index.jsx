import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Radyab-e-Zakhm";
  }, []);
  return (
    <main className="w-full h-dvh bg-surface-2">
      <PageHeader title="Dashbaord" />
    </main>
  );
};
