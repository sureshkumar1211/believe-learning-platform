"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const onClickHandler = (e: any) => {
    e.preventDefault();
    router.push(href);
  };
  const isActive = pathname == href;
  return (
    <button
      className={cn(
        "p-4 flex items-center transition-all hover:bg-sky-200/20 hover:text-sky-700 gap-2 text-sm w-full",
        isActive && "bg-sky-200/20 text-sky-700 border-r-4 border-sky-700"
      )}
      onClick={onClickHandler}
    >
      <Icon />
      {label}
    </button>
  );
};

export default SidebarItem;
