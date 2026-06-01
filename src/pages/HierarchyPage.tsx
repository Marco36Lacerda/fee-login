import { useUsers } from "../hooks/useUsers";
import { buildTree } from "../utils/buildTree";
import TreeNode from "../components/TreeNode";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function HierarchyPage() {
  const { users, loading, error } = useUsers();
  const { getUser, logout } = useAuth();
  const navigate = useNavigate();
  const currentUser = getUser();
  const tree = buildTree(users);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-light">Hierarchy Tree</h1>
          {currentUser && (
            <span className="text-sm text-gray-600">
              {currentUser.firstName} {currentUser.lastName}{" "}
              <button
                onClick={handleLogout}
                className="text-purple-600 hover:underline cursor-pointer"
              >
                (logout)
              </button>
            </span>
          )}
        </div>
        {loading && <p className="text-gray-400 text-sm">Loading...</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {!loading && !error && (
          <div className="flex flex-col">
            {tree.map((node) => (
              <TreeNode key={node.user.id} node={node} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HierarchyPage;
