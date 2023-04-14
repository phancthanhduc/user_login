import { useRecoilValue } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, userState } from "./App";
import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/LoginScreen";
import OTPScreen from "./screens/OTPScreen";
import ProfileScreen from "./screens/ProfileScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();
function Stack() {
  const user = useRecoilValue(userState);
  return user.isValidated ? (
    <RootStack.Navigator>
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  ) : (
    <RootStack.Navigator>
      <RootStack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{ title: "Welcome To Project" }}
      />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="OTP_Phase" component={OTPScreen} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
}

export default Stack;
