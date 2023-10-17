"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DashboardNav from "../../components/dasboardNav";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiDashboardFill, RiArrowLeftDownLine } from "react-icons/ri";
import { MdOutlineCallMissedOutgoing, MdCarRental } from "react-icons/md";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  const sidebarProps = [
    {
      name: "Dashboard",
      icon: <RiDashboardFill />,
      link: "/dashboard",
      active: path === "/dashboard",
    },
    {
      name: "Rented Out",
      icon: <MdOutlineCallMissedOutgoing />,
      link: "/dashboard/rented",
      active: path === "/dashboard/rented",
    },
    {
      name: "On Rent",
      icon: <RiArrowLeftDownLine />,
      link: "/dashboard/onrent",
      active: path === "/dashboard/onrent",
    },
    {
      name: "Rent an Item",
      icon: <MdCarRental />,
      link: "/dashboard/rent",
      active: path === "/dashboard/rent",
    },
    {
      name: "Requests",
      icon: <VscGitPullRequestNewChanges />,
      link: "/dashboard/requests",
      active: path === "/dashboard/requests",
    },
    {
      name: "Cart",
      icon: <AiOutlineShoppingCart />,
      link: "/dashboard/cart",
      active: path === "/dashboard/cart",
    },
  ];
  return (
    <html className="bg-white">
      <body className={`${inter.className}`}>
        <DashboardNav />
        <div className="flex">
          <section className="w-64 min-w-max h-screen bg-emerald-500 rounded-md overflow-auto px-4 py-4 flex flex-col gap-5">
            {sidebarProps.map((i) => {
              return (
                <div
                  key={i.name}
                  className={`flex justify-around text-white text-lg rounded-md p-2 transition-all hover:bg-white hover:text-emerald-500 ${
                    i.active ? "active" : ""
                  }`}
                >
                  <Link
                    className="w-full text-left flex place-items-center gap-3"
                    href={i.link}
                  >
                    {i.icon} {i.name}
                  </Link>
                </div>
              );
            })}
          </section>
          <section className="workspace">{children}</section>
        </div>
      </body>
    </html>
  );
}
