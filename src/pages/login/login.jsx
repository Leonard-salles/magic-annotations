import { useEffect, useState } from "react";

//components
import { InputWithIcon } from "../../components/input-with-icon/input-with-icon";
import { InputButton } from "../../components/button/input-button";

//icons
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";

//hoks
import { useAuthentication } from "../../hooks/useAuthentication";


import Alert from '@mui/material/Alert';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, load, error: authError } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
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
            value={email}
            placeholder="Use seu e-mail para acessar"
            change={setEmail}
          />

          <InputWithIcon
            type="password"
            placeholder="Use sua senha de acesso"
            icon={<Lock />}
            value={password}
            change={setPassword}
          />

          <InputButton value={"Entrar"} loading={load} />
            {error && <Alert severity="error">{error}</Alert>}
        </form>
      </div>

      <div className="w-1/2"></div>
    </main>
  );
};
