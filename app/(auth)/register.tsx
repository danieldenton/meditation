import { Text, SafeAreaView } from "react-native";
import { NavBar } from "@/components/NavBar";
import { TextInputWithLabel } from "@/components/TextInputWithLabel";
import { Button } from "@/components/Button";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";
import { TextInputWithLabelProps } from "@/constants/Types";

export default function RegisterScreen() {
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleRegister,
    error,
  } = useUser();

  const inputData: TextInputWithLabelProps[] = [
    {
      label: "First Name",
      textContentType: "givenName",
      onChangeText: setFirstName,
      autoCapitalize: "words",
      secureTextEntry: false,
    },
    {
      label: "Last Name",
      textContentType: "familyName",
      onChangeText: setLastName,
      autoCapitalize: "words",
      secureTextEntry: false,
    },
    {
      label: "Email",
      textContentType: "emailAddress",
      onChangeText: setEmail,
      autoCapitalize: "none",
      secureTextEntry: false,
    },
    {
      label: "Password",
      textContentType: "password",
      onChangeText: setPassword,
      autoCapitalize: "none",
      secureTextEntry: true,
    },
    {
      label: "Confirm Password",
      textContentType: "password",
      onChangeText: setConfirmPassword,
      autoCapitalize: "none",
      secureTextEntry: true,
    },
  ];

  const textInputsWithLabels = inputData.map((input, index) => (
    <TextInputWithLabel
      key={index}
      label={input.label}
      onChangeText={input.onChangeText}
      textContentType={input.textContentType}
      autoCapitalize={input.autoCapitalize}
      secureTextEntry={input.secureTextEntry}
    />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Create Account" href={"/login"}/>
      {textInputsWithLabels}
      <Button onPress={handleRegister} text="Create Account" />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </SafeAreaView>
  );
}
