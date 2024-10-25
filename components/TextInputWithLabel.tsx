import { TextInput } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { styles } from "@/constants/Styles";
import { TextInputWithLabelProps } from "@/constants/Types";

export const TextInputWithLabel = ({
  label,
  onChangeText,
  textContentType,
  autoCapitalize,
  secureTextEntry,
}: TextInputWithLabelProps) => {
  console.log("render TextInputWithLabel");
  return (
    <ThemedView>
      <ThemedText type="default">{label}</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        textContentType={textContentType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </ThemedView>
  );
};
