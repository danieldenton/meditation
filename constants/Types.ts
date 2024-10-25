import { Dispatch, SetStateAction } from 'react';
import { Href } from 'expo-router';

export type StateSetter = Dispatch<SetStateAction<string>>;

export type TextInputWithLabelProps = {
    label: string;
    onChangeText: (text: string) => void
    textContentType: "givenName" | "familyName" | "emailAddress" | "password";
    autoCapitalize: "none" | "words";
    secureTextEntry: boolean;
  };

  export type HomePageLinksProps = {
    title: string;
    href: Href;
  };
  