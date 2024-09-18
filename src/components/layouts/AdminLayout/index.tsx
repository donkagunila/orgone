import React from "react";
import SideNav from "../Navigation/sideNav";
import TopNav from "../Navigation/topNav";

interface Props {
  children: React.ReactNode;
  title: string;
}

function AdminLayout({ children, title }: Props) {
  return (
    <div>
      <main className="min-h-screen bg-slate-100/40">
        <SideNav />
        <div className="p-4 xl:ml-80 ">
          <TopNav title={title} />
          <div className="bg-slate-100 min-h-[calc(100vh-90px)] rounded-xl mt-2 p-3">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
