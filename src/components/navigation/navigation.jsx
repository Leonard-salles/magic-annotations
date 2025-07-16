import Avatar from "@mui/material/Avatar";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/auth-context";

import { BasicMenu } from "./nav-user-menu/user-menu";

import IconMagic from "/small-icon.svg";

import {stringAvatar} from "./avatar-color/avatar-color-config"

import { ChartNoAxesCombined, ChevronsLeftRightEllipsis, FilePlus } from "lucide-react";

export const Navigation = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <div className="flex flex-col justify-between h-dvh border-r-2 border-zinc-400 p-4">
      <nav className="min-w-[15%] flex  flex-col gap-8">
        <header className="flex gap-1 items-center">
          <BasicMenu
            avatar={<Avatar {...stringAvatar(user.email.split("@")[0])} />}
            logout={logout}
          />
          <h2 className="py-1 font-semibold text-xl">
            {user.email.split("@")[0]}
          </h2>
        </header>
        <ul className="w-full p-2.5 flex flex-col gap-2">
          <span className="flex items-center rounded-sm gap-3 p-2 cursor-pointer w-full hover:outline-1">
            <ChartNoAxesCombined />
            <li>Dashboard</li>
          </span>
          <span className="flex items-center rounded-sm gap-2.5 p-2 cursor-pointer w-full hover:outline-1">
            <ChevronsLeftRightEllipsis />
            <li>Testes</li>
          </span>
          <span className="flex items-center rounded-sm gap-3 p-2 cursor-pointer w-full hover:outline-1">
            <FilePlus />
            <li>Criar caderno</li>
          </span>
        </ul>
      </nav>
      <div className="p-2.5 border-2 flex items-center gap-1.5 rounded-sm">
        <img className="w-[20%]" src={IconMagic} alt="icone magic pequeno" />
        <p className="font-medium">&copy; Team Magictool 2025</p>
      </div>
    </div>
  );
};
