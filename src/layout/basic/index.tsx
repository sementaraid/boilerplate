import Header from "../../components/header";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mt-20">{children}</div>
    </div>
  );
};
