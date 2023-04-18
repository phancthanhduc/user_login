import React from "react";
import { View, Text } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import Stack from "./Stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yelow",
  },
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
