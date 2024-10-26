import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "expo-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StateSetter } from "@/constants/Types";

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
  handleLogin: () => void;
  logOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const checkUserRegister = () => {
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
  };

  // FIREBASE AUTHENTICATION
  // REGISTER NEW USER
  const handleRegister = () => {
    checkUserRegister();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveUser(userCredential);
        setUid(userCredential.user.uid);
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

  // LOGIN USER
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveUser(userCredential);
        setUid(userCredential.user.uid);
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

  // AsyncStorage functions
  const saveUser = async (user: UserCredential) => {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (error) {
      console.log("error storing user", error);
    }
  };

  const loadUser = async () => {
    try {
      const userString = await AsyncStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUid(user.user.uid);
        console.log(uid);
      }
    } catch (error) {
      console.error("error loading user", error);
    }
  };

  const clearUserState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUid("");
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("@user");
      clearUserState();
      router.push("/login");
    } catch (error) {
      console.log("error clearing user", error);
    }
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
        handleLogin,
        error,
        logOut,
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
