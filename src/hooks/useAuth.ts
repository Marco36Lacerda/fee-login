import { useState } from "react";
import { encode } from "../utils/encode";

const FIREBASE_URL = "https://gongfetest.firebaseio.com";

export function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const secret = encode(email, password);
      const res = await fetch(`${FIREBASE_URL}/secrets/${secret}.json`);
      const userId = await res.json();
      if (!userId) {
        setError("Invalid email or password.");
        return false;
      }
      const userRes = await fetch(`${FIREBASE_URL}/users/${userId}.json`);
      const user = await userRes.json();
      if (!user) {
        setError("User not found.");
        return false;
      }
      sessionStorage.setItem("user", JSON.stringify({ ...user, id: userId }));
      return true;
    } catch {
      setError("Something went wrong. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("user");
  };

  const getUser = () => {
    const raw = sessionStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  };

  return { login, logout, getUser, error, loading };
}
