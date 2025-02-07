"use client";
import { Logo } from "@/components/logo";
import { navData } from "@/config/main-navbar";
import { NavGroup } from "./nav-group";
import { useState } from "react";

export function DashboardNavbar() {
  const [openGroup, setOpenGroup] = useState<null | number>(null);

  const openGroupHandler = (i: number) => {
    setOpenGroup(openGroup === i ? null : i);
  };
  return (
    <div>
      <div className="h-28 bg-white center">
        <Logo />
      </div>
      <nav className="px-3 flex flex-col gap-2">
        {navData.map((item, i) => (
          <NavGroup
            key={i}
            {...item}
            isOpen={openGroup === i}
            onOpen={() => openGroupHandler(i)}
            depth={0}
          />
        ))}
      </nav>
    </div>
  );
}
