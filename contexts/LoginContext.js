import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";

export const LoginContext = createContext();
export const LoginContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  return (
    <LoginContext.Provider
      value={{
        setUserInfo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
