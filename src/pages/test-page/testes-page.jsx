import { Search } from "lucide-react";

import { useState } from "react";

import { twMerge } from "tailwind-merge";

import { AddNewTest } from "../../components/modal/modal-add-test.jsx";

export const TestesPage = () => {

  const [filter, setFilter] = useState("");

  return (
    <div className="w-full flex flex-col gap-10">
      <header className="p-4 flex justify-between mt-6">
        <AddNewTest />
        <div>
          <label className={`p-1 flex gap-1 items-center w-[30vw] focus:outline-1 ${filter && twMerge("border-b border-gray-300")}`}>
            <input 
              onChange={e => setFilter(e.target.value)} 
              className={"p-2 w-full outline-none [appearance:textfield] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"} 
              value={filter}
              placeholder="Faça uma busca por um teste especifico"
              type="search" 
            />
            <Search />
          </label>
        </div>
      </header>
      {/* {loading && <Skeleton animation="wave" variant="rectangular" width={210} height={60} />}
      {testes && testes.length > 0 && <CardContainer listItens={testes}/>} */}
    </div>
  );
};
