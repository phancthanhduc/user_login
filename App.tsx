import React from "react";
import { View, Text } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { atom, RecoilRoot } from "recoil";
import { persistAtom } from "./ultils/recoilPersistStorage";
import Stack from "./Stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yelow",
  },
};

export interface User {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  isValidated: boolean;
  gender: string;
}

export const userState = atom({
  key: "userState",
  default: {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    isValidated: false,
  } as User,
  effects_UNSTABLE: [persistAtom],
});

export type RootStackParamList = {
  LaunchScreen: undefined;
  Login: undefined;
  OTP_Phase: { phoneNumber: string };
  Profile: { phoneNumber: string; isValidated: boolean };
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <RecoilRoot>
          <React.Suspense
            fallback={
              <View>
                <Text>Loading</Text>
              </View>
            }
          >
            <NavigationContainer>
              <Stack />
            </NavigationContainer>
          </React.Suspense>
        </RecoilRoot>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
