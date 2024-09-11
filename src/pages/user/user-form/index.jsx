import { useForm } from "react-hook-form";
import { userSchema } from "../../../utils/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../contexts/AuthContext";

export default function UserForm() {
  const { createNewUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      await createNewUser(data.email, data.password);
      console.log("Usuário cadastrado:", data);
    } catch (error) {
      console.log("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <form
      className="max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 rounded shadow-md bg-black/50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          E-mail
        </label>
        <input
          {...register("email")}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Digite seu e-mail"
        />
        {errors.email && (
          <p className="text-xs italic text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Senha
        </label>
        <input
          {...register("password")}
          type="password"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password ? "border-red-500" : ""
          }`}
          placeholder="Digite sua senha"
        />
        {errors.password && (
          <p className="text-xs italic text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold bg-yellow-400 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
        >
          Cadastrar Usuário
        </button>
      </div>
    </form>
  );
}
