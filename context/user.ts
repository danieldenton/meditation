import {
  ReactNode,
  Dispatch,
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: Dispatch<React.SetStateAction<number[]>>;
};
const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
