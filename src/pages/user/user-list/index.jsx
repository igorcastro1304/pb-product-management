import { Link } from "react-router-dom";
import UserGrid from "../../../components/UserComponents/UserGrid";
import { useAuth } from "../../../contexts/AuthContext";

export default function UserList() {
  const { users } = useAuth();

  return (
    <div className="p-6">
      <div>
        <h1 className="mb-6 text-3xl font-bold text-yellow-400">
          Usuários Cadastrados
        </h1>
        {users.length !== 0 ? (
          <UserGrid users={users} />
        ) : (
          <p className="text-yellow-400">Nenhum usuário cadastrado ainda...</p>
        )}
      </div>

      <div className="fixed flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full shadow-lg bottom-4 right-4">
        <Link to="/user/form">
          <button className="text-3xl font-bold text-white">+</button>
        </Link>
      </div>
    </div>
  );
}
