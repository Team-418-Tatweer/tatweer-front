"use client";

import CollapsibleContent from "@/components/CollapsibleContent";
import { INavItem } from "@/types/NavItem";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";

interface props extends INavItem {
  isOpen: boolean;
  onOpen: () => void;
  depth: number;
}
export function NavGroup({ Icon, path, title, childs, depth, isOpen, onOpen }: props) {
  const pathName = usePathname();
  const [openGroup, setOpenGroup] = useState<null | number>(null);

  const openGroupHandler = (i: number) => {
    setOpenGroup(openGroup === i ? null : i);
  };

  useEffect(() => {
    if (pathName.includes(path || "")) {
      onOpen();
    }
  }, [pathName, path]);
  return (
    <div>
      <Link
        href={path || ""}
        onClick={onOpen}
        style={{ marginLeft: `${depth * 10}px` }}
        className={`flex items-center gap-3 rounded-lg px-3 py-1 min-w-max
				${depth > 0 ? "text-md text-light" : "text-lg"}
				${pathName === path ? "text-white bg-primary" : ""}`}>
        <span className={pathName === path ? "text-white bg-primary" : "text-primary"}>
          {Icon || <IoIosArrowForward />}
        </span>
        <span>{title}</span>
        {childs && (
          <RiArrowRightSLine
            className={`transition-transform ${!isOpen ? "" : "rotate-90"}`}
          />
        )}
      </Link>
      {childs && (
        <CollapsibleContent isOpen={isOpen}>
          {childs.map((child, i) => (
            <NavGroup
              key={i}
              isOpen={openGroup === i}
              onOpen={() => openGroupHandler(i)}
              {...child}
              depth={depth + 1}
            />
          ))}
        </CollapsibleContent>
      )}
    </div>
  );
}
