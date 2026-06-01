import type { RawUser, TreeNode } from "../types";

export function buildTree(users: RawUser[]): TreeNode[] {
  const managerIds = new Set(
    users
      .map((u) => u.managerId)
      .filter((id): id is number => id !== undefined),
  );

  const nodeMap = new Map<number, TreeNode>();
  users.forEach((user) => {
    nodeMap.set(user.id, {
      user,
      children: [],
      isManager: managerIds.has(user.id),
    });
  });

  const roots: TreeNode[] = [];

  users.forEach((user) => {
    const node = nodeMap.get(user.id)!;
    if (user.managerId === undefined || user.managerId === null) {
      roots.push(node);
    } else {
      const parent = nodeMap.get(user.managerId);
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    }
  });

  return roots;
}
