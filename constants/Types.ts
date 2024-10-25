import { Dispatch, SetStateAction } from 'react';

export type StateSetter = Dispatch<SetStateAction<string>>;

export type TextInputWithLabelProps = {
    label: string;
    onChangeText: (text: string) => void;
    textContentType: "givenName" | "familyName" | "emailAddress" | "password";
    autoCapitalize: "none" | "words";
    secureTextEntry: boolean;
  };