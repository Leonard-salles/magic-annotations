import { Clock, Edit, Trash, User } from "lucide-react";
import { formattedDate } from "../../../utils/date-formatted";

import useEmblaCarousel from "embla-carousel-react";
import { BasicModal } from "../../../components/modal/modal";
import { deleteSubitemById } from "../../../firebase/requests/delete-item";

export const Slider = ({ data }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden w-full mb-12" ref={emblaRef}>
      <div className="flex gap-2">
        {data.map((item) => {
          return (
            <div
              className="border grow-0 shrink-0 basis-[65%] min-w-[0] border-white rounded-sm p-4 flex flex-col gap-3"
              key={item.id}
            >
              <div>
                <span className="flex justify-between items-center">
                  <p className="font-semibold">
                    {item.vendor.toUpperCase()} {item.model}
                  </p>
                  <div className="flex gap=1">
                    <div className="cursor-pointer p-1 hover:bg-gray-400 rounded-sm">
                      <Edit size={20} />
                    </div>
                    <BasicModal 
                      icon={<Trash size={20} />} 
                      title="Excluir teste"
                      text="Tem certeza que deseja excluir esse teste ?"
                      func={() => deleteSubitemById(item.id)}
                    />
                  </div>
                </span>
                <p className="text-sm">{item.firmware}</p>
              </div>
              <div className="flex gap-2">
                <p
                  className={`rounded-xl px-2 w-fit ${
                    item.status === "created"
                      ? "bg-zinc-500"
                      : item.status === "success"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {item.status}
                </p>
                <p className="rounded-xl px-2 w-fit bg-purple-700 font-semibold">
                  {item.banda.toUpperCase()}
                </p>
              </div>
              <hr />
              <section className="flex gap-4">
                <div>
                  <p className="flex gap-2 items-center">
                    <User size={20} /> {item.user}
                  </p>
                  <p className="flex gap-2 items-center">
                    <Clock size={20} />
                    {formattedDate(item.createdAt)}
                  </p>
                </div>
                {item.observation.length > 0 ? (
                  <div>
                    <p className="font-semibold">Observações</p>
                    <p className="pl-3 text-sm">{item.observation}</p>
                  </div>
                ) : null}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};
