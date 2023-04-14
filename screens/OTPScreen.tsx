import React from "react";
import { useRecoilState } from "recoil";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, HelperText, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { RootStackParamList, userState } from "../App";
import BottomPicture from "../components/bottomPicture";

interface Props {
  source: string;
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

function OTPScreen({ navigation, route }: ScreenProps): JSX.Element {
  const [user, setUser] = useRecoilState(userState);
  const [text, setText] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [currentOTP, setCurrentOTP] = React.useState("");
  const generatedOTP = () => {
    let number: number;
    let arrNum = [];
    for (let i = 0; i < 5; i++) {
      number = Math.floor(Math.random() * 10);
      arrNum.push(number);
    }
    return arrNum.join("");
  };
  React.useEffect(() => {
    setCurrentOTP(generatedOTP());
  }, []);

  console.log(currentOTP);
  const hasErrors = () => {
    return isError;
  };

  return (
    <Container>
      <StyledTitle>PROJECT D</StyledTitle>

      <StyledAppLogo source={require("../assets/blue-pattern.jpg")} />

      <View>
        <StyledTextInput
          mode="outlined"
          label="Enter your OTP code"
          value={text}
          onChangeText={(text) => setText(text)}
          outlineColor={"teal"}
          activeOutlineColor={"teal"}
        />
        <StyledButton
          mode="contained"
          onPress={() => {
            if (text === currentOTP) {
              setUser({ ...user, isValidated: true });
              navigation.navigate("Profile", {
                phoneNumber: user.phoneNumber,
                isValidated: user.isValidated,
              });
            } else {
              setIsError(true);
            }
          }}
        >
          <StyledText>Login</StyledText>
        </StyledButton>
        <HelperText type="error" visible={hasErrors()}>
          Your OTP-code is invalid!
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

const StyledAppLogo = styled.Image<Props>`
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

export default OTPScreen;
