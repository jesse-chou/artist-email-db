"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function SidebarNavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
