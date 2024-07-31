import Button from "../../components/Button";
import LoginForm from "../../components/LoginForm";
import { logout } from "../../utils/auth";

export default function LoginPage() {
    return (
        <div className="bg-black">
            <h2 className="text-yellow-400">Faça seu login e aproveite o melhor sistema de estoque empresarial</h2>
            <LoginForm />
            {/* TODO LINK TO */}
            <p className="text-yellow-400">Não possui cadastro? Clique aqui e cadastre-se agora!</p>
        </div>
    );
}