import { Trash2 } from "lucide-react";
import { BasicModal } from "../../modal/modal";

export const CardContainer = ({ listItens }) => {

  return (
    <div className="p-4 flex flex-col gap-4">
      {listItens.map((item) => (
        <div key={item.id} className="border-2 border-gray-400 p-4 rounded-lg">
          <header className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold">{item.testName}</h1>
              <span className="flex gap-1.5 text-sm">
                <h2 className="font-semibold">Criado em: </h2>
                {/* <p className="text-sm">{dateTratament(item.createdAt)}</p> */}
              </span>
            </div>
            <form className="hover:bg-[#e17171] rounded-md py-2">
              <BasicModal
                icon={<Trash2 />}
                title="Cuidado !!!"
                text="Você tem certeza que deseja excluir todos esses testes ?"
              />
            </form>
          </header>
        </div>
      ))}
    </div>
  );
};
