import {
  ReactNode,
  Dispatch,
  createContext,
  useState,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { useRouter, useSegments } from "expo-router";

type UserContextType = {
  uid: string;
  setUid: Dispatch<SetStateAction<string>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const rootSegment = useSegments();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    if (!firstName && rootSegment !== "(auth)") {
      router.push("/login");
    }
    // const user = localStorage.getItem("user");
    // if (user) {
    //   setUser(JSON.parse(user));
    // }
  }, []);

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        uid,
        setUid
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
