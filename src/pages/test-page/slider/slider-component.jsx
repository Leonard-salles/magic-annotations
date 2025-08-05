import { useEffect, useState } from "react";

import { AddNewItem } from "../../../components/modal/modal-add-test";
import { listenToAllItems } from "../../../firebase/requests/get-item-test";
import { Slider } from "./slider";
import { Trash } from "lucide-react";
import { BasicModal } from "../../../components/modal/modal";
import { deleteSubcollectionAndParent } from "../../../firebase/requests/delete-all-items";

export const SliderComponent = ({ title, data }) => {
  const [allItems, setAllItems] = useState([]);

  console.log(data.id);
  useEffect(() => {
    const unsubscribe = listenToAllItems(
      setAllItems,
      "testPlans",
      data.id,
      "tests"
    ); // ou callback: (data) => setTests(data)

    return () => {
      unsubscribe(); // limpa o listener quando o componente desmonta
    };
  }, []);

  console.log(allItems);

  return (
    <div className="flex flex-col gap-3">
      <span className="flex justify-between">
        <div>
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="text-zinc-400">{data.data.testDescription}</p>
        </div>
        <div className="flex items-center">
          <AddNewItem id={data.id} />
          <BasicModal
            icon={<Trash size={20} />}
            title="Excluir teste"
            text="Tem certeza que deseja excluir TODOS os testes ?"
            func={() => deleteSubcollectionAndParent(data.id)}
          />
        </div>
      </span>
      <main className="w-full">
        {allItems.length > 0 ? (
          <Slider data={allItems} />
        ) : (
          <>
            <p className="text-zinc-300 text-center">Nenhum teste encontrado</p>
          </>
        )}
      </main>
    </div>
  );
};
