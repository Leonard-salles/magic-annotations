import { useEffect, useState } from "react";

import { Play, ChevronDown } from "lucide-react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { tests } from "../../utils/tests-name";

export const ExecuteTest = () => {
  const [ip, setIp] = useState("192.168.15.1");
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(false);
  const [testsName, setTestsName] = useState([]);

  useEffect(() => {
    setTestsName(tests);
  }, [tests]);

  return (
    <div className="p-4 flex flex-col gap-10">
      <article>
        <div className="flex gap-3">
          <input
            type="text"
            required
            className="outline-1 p-3 rounded-sm"
            placeholder="IP do HGU"
            onChange={(e) => setIp(e.target.value)}
            value={ip}
            disabled={disabled}
          />
          <input
            type="text"
            required
            className="outline-1 p-3 rounded-sm"
            placeholder="Senha do HGU"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={disabled}
          />
        </div>
        {disabled && (
          <p className="text-zinc-300 mt-2">
            Esses campos estão desabilitados porquê o HGU utiliza sempre a mesma
            conexão para os testes
          </p>
        )}
      </article>
      <main className="grid grid-cols-3 gap-4">
        {testsName.map((item) => (
          <div
            key={item.id}
            className="outline-1 rounded-sm p-3 flex flex-col gap-5"
          >
            <form className="flex gap-5 items-center">
              <button
                type="Submit"
                className="bg-white p-2 rounded-full cursor-pointer hover:bg-zinc-300"
              >
                <Play size={22} className="text-zinc-900" />
              </button>
              <h1 className="text-xl font-semibold">{item.testName}</h1>
            </form>
            <div>
              <p className="text-zinc-300 text-sm">{item.descTest}</p>
            </div>
            <hr />
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ex ipsam saepe, consequuntur nemo asperiores eos fugiat, eum sunt quos tenetur. Error ullam quod quibusdam accusantium officiis ratione delectus impedit.
            </span>
          </div>
        ))}
      </main>
    </div>
  );
};
