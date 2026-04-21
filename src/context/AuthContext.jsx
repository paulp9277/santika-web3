import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk Login
  const login = (userData) => {
    setUser(userData);
    // Simpan di localStorage supaya kalau di-refresh gak hilang
    localStorage.setItem('user_santika', JSON.stringify(userData));
  };

  // Fungsi untuk Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user_santika');
  };

  // Cek apakah ada user yang tersimpan saat pertama kali web dibuka
  useEffect(() => {
    const savedUser = localStorage.getItem('user_santika');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook kustom agar kita gampang panggilnya di komponen lain
export const useAuth = () => useContext(AuthContext);