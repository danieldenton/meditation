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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    if (!firstName || !lastName) {
      setError("Please enter your first and last name");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // see what user looks like
        console.log(user);
        // POST USER TO DB HERE
        setError("");
        router.push("/(app)");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorCode, errorMessage);
      });
  };

  const signOut = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUid("");
    router.push("/login");
  };

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
        signOut,
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
