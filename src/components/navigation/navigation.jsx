import Avatar from "@mui/material/Avatar";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/auth-context";
import { BasicMenu } from "./nav-user-menu/user-menu";

import { ChevronsLeftRightEllipsis } from 'lucide-react';

export const Navigation = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className="min-w-[15%] flex  flex-col gap-8 h-dvh border-r-2 border-zinc-400">
      <header className="flex gap-1 p-4">
        <BasicMenu
          avatar={<Avatar sx={{ bgcolor: "pink" }}>{user.email[0]}</Avatar>}
          logout={logout}
        />
        <h2 className="py-1 font-semibold text-xl">
          {user.email.split("@")[0]}
        </h2>
      </header>
      <ul className="w-full p-2.5 flex flex-col gap-2">
        <span className="flex items-center rounded-sm gap-2.5 p-2 cursor-pointer w-full hover:outline-1">
          <ChevronsLeftRightEllipsis />
          <li>Testes</li>
        </span>
      </ul>
    </nav>
  );
};
