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
  const [marketInfo, setMarketInfo] = useState("");

  return (
    <LoginContext.Provider
      value={{
        setUserInfo,
        userInfo,
        setMarketInfo,
        marketInfo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
