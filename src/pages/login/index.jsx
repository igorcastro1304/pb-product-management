import Button from "../../components/Button";
import LoginForm from "../../components/LoginForm";
import { logout } from "../../utils/auth";

export default function LoginPage(props) {
    const { userIsLoggedIn } = props;
    console.log(userIsLoggedIn);

    return (
        <div className="flex flex-col justify-evenly items-center md:justify-center">
            <h2 className="text-yellow-400 p-4 w-[20rem] md:w-[30rem] text-center text-2xl font-bold md:mb-20 lg:w-[40rem]">Faça seu login e aproveite o melhor sistema de estoque empresarial</h2>
            <div className="flex flex-col justify-center items-center">
                <LoginForm />
                {/* TODO LINK TO */}
                <p className="text-yellow-400 p-4 w-[20rem] md:w-[30rem] text-center lg:w-[40rem]">Não possui cadastro? Clique aqui e cadastre-se agora!</p>
            </div>
        </div>
    );
}