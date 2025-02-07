"use client";
import { IMAGES_PATHS } from "@/config/images";
import { useUser } from "@/context/userContext/context";
import Image from "next/image";
import { FaPlus, FaComment, FaBell, FaSearch, FaSlidersH } from "react-icons/fa";
export function DashboardHeader() {
  const { user } = useUser();
  return (
    <header className="h-28 sticky top-0 bg-white flex items-center justify-between p-4 border-b-4 border-primary">
      <div className="flex items-center w-full max-w-2xl mx-auto">
        <div className="relative w-full">
          <input
            className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search..."
            type="text"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light" />
          <FaSlidersH className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaPlus className="text-primary" />
        <FaComment className="text-primary" />
        <FaBell className="text-primary" />
        <div className="flex items-center space-x-2">
          <Image
            alt="User avatar"
            className="w-10 h-10 rounded-full"
            height="40"
            src={user?.image || IMAGES_PATHS.user}
            width="40"
          />
          <div>
            <p className="font-semibold">
              {user?.name}
              <span className="text-green-500">•</span>
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-500">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
