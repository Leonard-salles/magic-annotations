import Lottie from "react-lottie";
import notFound from "../../../assets/lottie/404-error-page.json";

import { useAuthValue } from "../../../context/auth-context";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const { user } = useAuthValue();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
  };

  return (
    <div className="text-center">
      <Lottie options={defaultOptions} width="70%" height="70%" />
      <div className="flex flex-col gap-4 items-center">
        <p className="font-medium text-xl">Parece que não há nada aqui...</p>
        <Link 
          to={user ? "/" : "/login"} 
          className="bg-white text-zinc-900 rounded-lg w-52 p-3 font-medium hover:bg-[#cdcdcd]"
        >
          {user ? "Ir a Home" : "Fazer login"}
        </Link>
      </div>
    </div>
  );
};
