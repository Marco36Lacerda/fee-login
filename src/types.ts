export interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  managerId?: number;
  photo?: string;
  password?: string;
}

export interface TreeNode {
  user: RawUser;
  children: TreeNode[];
  isManager: boolean;
}

export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
