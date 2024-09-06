import UserCard from "../UserCard";

export default function UserGrid({ users }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user, index) => (
        <UserCard key={index} email={user.email} password={user.password} />
      ))}
    </div>
  );
}
