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
  return (
    <ThemedView>
      <ThemedText type="default">{label}</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        textContentType={textContentType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent" // Make sure we need this for Android
        autoCorrect={false}
      />
    </ThemedView>
  );
};
