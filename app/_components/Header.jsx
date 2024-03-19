"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LayoutGrid } from "lucide-react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import GlobalApi from "../_utils/GlobalApi";

const Header = () => {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);
  /**
   * Get Category List
   */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("res", resp.data.data);
      setcategoryList(resp.data.data);
    });
  };
  return (
    <div className="p-5 shadow-md flex gap-2 justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" width={150} height={100} alt="logo" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200  cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem
                key={category?.id || index}
                className="flex gap-4 items-center cursor-pointer"
              >
                {" "}
                {/* Use category ID or index */}
                <Image
                  src={category?.attributes?.icon?.data?.[0]?.attributes?.url}
                  alt="icon"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
                <h2 className="text-lg">{category?.attributes?.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          {" "}
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
