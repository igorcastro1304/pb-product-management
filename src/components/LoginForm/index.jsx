import { useState } from "react";
import Button from "../Button";
import { login } from "../../utils/auth";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        try {
            login(email, password);
        } catch (err) {
            console.log(err);
        } finally {
            setEmail("");
            setPassword("");
        }
    }

    return (
        <form className="w-[20rem] p-4 flex flex-col justify-center gap-2 md:w-[30rem] lg:w-[40rem]" onSubmit={handleSubmit}>
            <input className="p-1 rounded-sm border-black/70" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input className="p-1 rounded-sm border-black/70" type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setPassword(event.target.value)} />

            <Button type="submit" className="bg-black text-yellow-400 p-2 rounded-sm">Fazer login</Button>

        </form>
    );
}