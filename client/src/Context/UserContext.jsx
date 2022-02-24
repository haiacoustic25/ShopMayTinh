import React from "react";
import { useState, createContext } from "react";

export const Account = createContext();

const UserContext = ({ children }) => {
  const [checkAccount, setCheckAccount] = useState({
    isAuth: false,
    user: null,
  });

  const confirmLogin = (user) => {
    setCheckAccount({ isAuth: true, user: user });
  };
  const confirmLogout = () => {
    setCheckAccount({ isAuth: false, user: null });
  };
  const dataUser = {
    checkAccount,
    setCheckAccount,
    confirmLogin,
    confirmLogout,
  };
  return <Account.Provider value={dataUser}>{children}</Account.Provider>;
};

export default UserContext;
