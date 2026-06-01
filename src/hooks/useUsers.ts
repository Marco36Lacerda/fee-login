import { useEffect, useState } from "react";

const FIREBASE_URL = "https://gongfetest.firebaseio.com";

export interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  managerId?: number;
  photo?: string;
}

export function useUsers() {
  const [users, setUsers] = useState<RawUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${FIREBASE_URL}/users.json`);
        const data = await res.json();
        const parsed: RawUser[] = (data as RawUser[]).filter(Boolean);
        setUsers(parsed);
      } catch {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
}
