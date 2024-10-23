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
  // password: string;
  setPassword: StateSetter;
  // confirmPassword: string;
  setConfirmPassword: StateSetter;
  error: string;
  // setError: StateSetter;
  handleRegister: () => void;
  signOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    // const user = localStorage.getItem("user");
    // if (user) {
    //   setUser(JSON.parse(user));
    // }
  }, []);

  const handleRegister = () => {
    if (!firstName) {
      setError("Please enter your first name");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    router.push("/(app)");
  };

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
        setPassword,
        setConfirmPassword,
        uid,
        setUid,
        handleRegister,
        error,
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
