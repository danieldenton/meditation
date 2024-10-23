import {
  ReactNode,
  Dispatch,
  createContext,
  useState,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "expo-router";

type StateSetter = Dispatch<SetStateAction<string>>;

type UserContextType = {
  uid: string;
  setUid: StateSetter;
  firstName: string;
  setFirstName: StateSetter;
  lastName: string;
  setLastName: StateSetter;
  email: string;
  setEmail: StateSetter;
  password: string;
  setPassword: StateSetter;
  signOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    // const user = localStorage.getItem("user");
    // if (user) {
    //   setUser(JSON.parse(user));
    // }
    setEmail("")
  }, []);

  const signOut = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUid("");
    router.push("/login");
  }

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        uid,
        setUid,
        signOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
