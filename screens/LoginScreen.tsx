import React from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, HelperText } from "react-native-paper";
import { useRecoilState } from "recoil";
import { RootStackParamList } from "../common/types";
import { userState } from "../recoil";
import BottomPicture from "../components/BottomPicture";
import { EScreen } from "../common/enum";
import img from "../assets/blue-pattern.jpg";

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

function Login({ navigation }: ScreenProps): JSX.Element {
  const [user, setUser] = useRecoilState(userState);
  const [isError, setIsError] = React.useState(false);
  const onUpdatePhoneNumber = (phoneNumber: string) => {
    setUser({ ...user, phoneNumber });
  };

  const onLogin = () => {
    if (user.phoneNumber && user.phoneNumber.length >= 10) {
      navigation.navigate(EScreen.OTP_PHASE, {
        phoneNumber: user.phoneNumber,
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <Container>
      <StyledTitle>PROJECT D</StyledTitle>

      <StyledAppLogo source={img} />

      <View>
        <StyledTextInput
          mode="outlined"
          label="Your Phone Number"
          value={user.phoneNumber}
          onChangeText={onUpdatePhoneNumber}
          outlineColor={"teal"}
          activeOutlineColor={"teal"}
        />
        <StyledButton mode="contained" onPress={onLogin}>
          <StyledText>Login</StyledText>
        </StyledButton>
        <HelperText type="error" visible={!!isError}>
          Your phone number is invalid!
        </HelperText>
        <BottomPicture />
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: "#fff";
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: #0d571b;
  position: relative;
  top: -100px;
`;

const StyledAppLogo = styled.Image`
  width: 100px;
  height: 100px;
  margin: -64px 0 20px 0;
`;

const StyledTextInput = styled(TextInput)`
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
`;

const View = styled.View`
  align-items: center;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #0d571b;
  justify-content: center;
  border-radius: 5px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export default Login;
