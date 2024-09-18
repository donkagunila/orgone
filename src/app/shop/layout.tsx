import React from "react";
import SideNav from "../components/layouts/sideNav";
import TopNav from "../components/layouts/topNav";

interface Props {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen bg-slate-100/40">
      <SideNav />
      <div className="p-4 xl:ml-80">
        <TopNav />
        {children}
      </div>
    </main>
  );
};

export default ShopLayout;
