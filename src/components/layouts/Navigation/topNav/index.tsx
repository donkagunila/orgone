import FullScreenButton from "@/components/ui/actions/FullScreenButton";
import Lucide from "@/components/ui/icons/Lucide";
import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
}

function TopNav({ title }: Props) {
  return (
    <nav className="block w-full max-w-full bg-transparent shadow-none z-50 mb-2">
      <div className="flex justify-between gap-6">
        <div className="capitalize">
          <div className="text-xs text-slate-400">Dashboard / {title}</div>
          <div className="text-base text-slate-600 py-1 font-medium">
            {title ?? "Dashboard"}
          </div>
        </div>
        <div className="flex">
          <ul className="flex text-slate-500">
            <li className="px-3">
              <Link
                href="/shop/notifications"
                className=" h-full w-full flex justify-center items-center"
              >
                <Lucide name="Bell" className="h-4 w-4" />
              </Link>
            </li>

            <li className="px-3">
              <Link
                href="/shop/notifications"
                className=" h-full w-full flex justify-center items-center"
              >
                <Lucide name="Cog" className="h-4 w-4" />
              </Link>
            </li>

            <li className="px-3">
              <FullScreenButton />
            </li>
          </ul>

          <div className="px-4 py-3">
            <div>Donald</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
