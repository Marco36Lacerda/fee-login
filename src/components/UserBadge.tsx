import type { RawUser } from "../hooks/useUsers";

function UserBadge({ user }: { user: RawUser }) {
  const initials =
    `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full border-2 border-purple-400 overflow-hidden flex items-center justify-center bg-purple-100 text-purple-700 text-xs font-semibold shrink-0">
      {user.photo ? (
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export default UserBadge;
