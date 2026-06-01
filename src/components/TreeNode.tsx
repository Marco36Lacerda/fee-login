import type { TreeNode as TreeNodeType } from "../utils/buildTree";
import UserBadge from "./UserBadge";

function TreeNode({ node, depth = 0 }: { node: TreeNodeType; depth?: number }) {
  const { user, children, isManager } = node;

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center gap-3 py-2"
        style={{ paddingLeft: `${depth * 2.5}rem` }}
      >
        <span className="w-4 text-purple-500 font-bold text-sm select-none">
          {isManager ? "+" : "−"}
        </span>
        <UserBadge user={user} />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
      </div>
      {children.map((child) => (
        <TreeNode key={child.user.id} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default TreeNode;
