import { useEffect, useState } from "react";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      login(email, password);
      toast("Usuário logado com sucesso!");
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <form
      className="w-[20rem] p-4 flex flex-col justify-center gap-2 md:w-[30rem] lg:w-[40rem]"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <input
        className="p-1 rounded-sm border-black/70"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="p-1 rounded-sm border-black/70"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button type="submit" className="p-2 text-yellow-400 bg-black rounded-sm">
        Fazer login
      </Button>
    </form>
  );
}
