import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import { InputWithIcon } from "../../components/input-with-icon/input-with-icon";
import { InputButton } from "../../components/button/input-button";

//icons
import { Lock, User, Mail, MoveRight } from "lucide-react";

//hoks
import { useAuthentication } from "../../hooks/useAuthentication";

import Alert from "@mui/material/Alert";
import { serverTimestamp } from "firebase/firestore";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, load, error: authError } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      displayName,
      password,
      createdAt: serverTimestamp()
    };

    const res = await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <main className="w-full flex flex-row justify-center h-dvh ">
      <div className="w-1/2 flex flex-col pl-8 justify-center gap-3">
        <h2 className="font-medium text-3xl">Bem vindo de volta!</h2>
        <p>Entre com as suas credenciais</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-md py-5">
          <InputWithIcon
            icon={<Mail />}
            type="email"
            required
            value={email}
            placeholder="Use seu e-mail para criar o acesso"
            change={setEmail}
          />
          <InputWithIcon
            icon={<User />}
            type="text"
            required
            value={displayName}
            placeholder="Crie seu nome de usuário"
            change={setDisplayName}
          />

          <InputWithIcon
            type="password"
            required
            placeholder="Crie sua senha de acesso"
            icon={<Lock />}
            value={password}
            change={setPassword}
          />

          <InputButton value={"Entrar"} loading={load} />
          <Link
            to="/login"
            className="w-full flex items-center justify-end gap-3"
          >
            Se já possui uma conta acesse por aqui
            <MoveRight />
          </Link>
          {error && <Alert severity="error">{error}</Alert>}
        </form>
      </div>

      <div className="w-1/2"></div>
    </main>
  );
};
