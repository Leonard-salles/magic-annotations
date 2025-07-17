import Lottie from "react-lottie";
import notFound from "../../../assets/lottie/404 error page.json";

export const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="text-center">
        <Lottie options={defaultOptions} width='80%' height="80%" />
        <p className="font-medium text-xl">Parece que não há nada aqui...</p>
    </div>
  )
};
