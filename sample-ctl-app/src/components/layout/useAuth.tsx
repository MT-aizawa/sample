import { useState } from 'react';

export const useAuth = () => {
  // ローカルストレージにトークンがあるかでログイン状態を判定
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem('auth_token')
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const login = (token: string, user: string) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', user);
    setIsAdmin(false)
    if(user === "Admin") {
        setIsAdmin(true)
    }
    setIsAuthenticated(true);
    console.log(isAdmin)
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setIsAdmin(false);
    setIsAuthenticated(false);
    console.log(localStorage.getItem('auth_token'))
  };

  return { isAuthenticated, isAdmin, login, logout };
}