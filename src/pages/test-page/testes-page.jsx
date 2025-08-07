import { Search } from "lucide-react";

import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import { AddNewTest } from "../../components/modal/modal-add-test.jsx";

import { listenToAllTests } from "../../firebase/requests/get-all-test";

import { SliderComponent } from "./slider/slider-component.jsx";

export const TestesPage = () => {
  const [filter, setFilter] = useState("");

  const [allTestes, setAllTestes] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToAllTests(setAllTestes, "testPlans"); // ou callback: (data) => setTests(data)

    return () => {
      unsubscribe(); // limpa o listener quando o componente desmonta
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <header className="p-4 flex justify-between mt-6">
        <AddNewTest />
        {/* <div>
          <label
            className={`p-1 flex gap-1 items-center w-[30vw] focus:outline-1 ${
              filter && twMerge("border-b border-gray-300")
            }`}
          >
            <input
              onChange={(e) => setFilter(e.target.value)}
              className={
                "p-2 w-full outline-none [appearance:textfield] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
              }
              value={filter}
              placeholder="Faça uma busca por um teste especifico"
              type="search"
            />
            <Search />
          </label>
        </div> */}
      </header>
      <main className="p-4 flex flex-col gap-5">
        {allTestes && allTestes.map((test) => <SliderComponent key={test.id} title={test.data.testName} data={test} />)}
      </main>
    </div>
  );
};
