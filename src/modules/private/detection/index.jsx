import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";

export const Detection = () => {
  useEffect(() => {
    document.title = "Detection | Radyab-e-Zakhm";
  }, []);
  return (
    <main className="w-full h-dvh bg-surface-2">
      <PageHeader title="Detection" />
    </main>
  );
};
