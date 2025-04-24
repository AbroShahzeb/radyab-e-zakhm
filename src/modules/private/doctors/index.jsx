import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";

export const Doctors = () => {
  useEffect(() => {
    document.title = "Doctors | Radyab-e-Zakhm";
  }, []);
  return (
    <main className="w-full h-dvh bg-surface-2">
      <PageHeader title="Doctors" />
    </main>
  );
};
