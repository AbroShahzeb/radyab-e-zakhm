import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";

export const History = () => {
  useEffect(() => {
    document.title = "History | Radyab-e-Zakhm";
  }, []);
  return (
    <main className="w-full h-dvh bg-surface-2">
      <PageHeader title="History" />
    </main>
  );
};
