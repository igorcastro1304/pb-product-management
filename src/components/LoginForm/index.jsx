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
        <form className="w-[50rem] bg-blue-200 p-4 flex flex-col justify-center gap-2" onSubmit={handleSubmit}>
            <input className="p-1 rounded-sm" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input className="p-1 rounded-sm" placeholder="Digite sua senha" value={password} onChange={(event) => setPassword(event.target.value)} />

            <button className="bg-black text-yellow-400 p-2 rounded-sm">Fazer login</button>

        </form>
    );
}