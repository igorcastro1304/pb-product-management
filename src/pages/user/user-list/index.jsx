import UserGrid from "../../../components/UserComponents/UserGrid";

export default function UserList() {
  const users = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "password456" },
    { email: "user3@example.com", password: "password789" },
    // mais usuários...
  ];

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold text-yellow-400">
        Usuários Cadastrados
      </h1>
      <UserGrid users={users} />
    </div>
  );
}
