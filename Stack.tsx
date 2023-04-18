import { useRecoilValue } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./common/types";
import { userState } from "./recoil";
import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/LoginScreen";
import OTPScreen from "./screens/OTPScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { EScreen } from "./common/enum";

const RootStack = createNativeStackNavigator<RootStackParamList>();
function Stack() {
  const user = useRecoilValue(userState);

  if (user.isValidated)
    return (
      <RootStack.Navigator>
        <RootStack.Screen name={EScreen.PROFILE} component={ProfileScreen} />
      </RootStack.Navigator>
    );

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={EScreen.LAUNCH}
        component={LaunchScreen}
        options={{ title: "Welcome To Project" }}
      />
      <RootStack.Screen name={EScreen.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={EScreen.OTP_PHASE} component={OTPScreen} />
      <RootStack.Screen name={EScreen.PROFILE} component={ProfileScreen} />
    </RootStack.Navigator>
  );
}

export default Stack;
