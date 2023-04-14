import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { RootStackParamList } from "../App";
import BottomPicture from "../components/bottomPicture";

interface Props {
  source: string;
}

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

function LaunchScreen({ navigation }: ScreenProps): JSX.Element {
  return (
    <Container>
      <StyledTitle>
        WELCOME TO
        <br />
        PROJECT D
      </StyledTitle>

      <StyledAppLogo source={require("../assets/blue-pattern.jpg")} />

      <View>
        <StyledButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          <StyledText>Login</StyledText>
        </StyledButton>
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
  text-align: center;
`;

const StyledAppLogo = styled.Image<Props>`
  width: 100px;
  height: 100px;
  margin: -64px 0 20px 0;
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
  width: 200px;
  background-color: #0d571b;
  justify-content: center;
  border-radius: 5px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export default LaunchScreen;
