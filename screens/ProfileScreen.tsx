import React from "react";
import styled from "styled-components/native";
import { useRecoilValue } from "recoil";
import { userState } from "../App";
import BottomPicture from "../components/bottomPicture";
import EditProfileModal from "../components/EditProfileModal";

interface Props {
  source: string;
}

function ProfileScreen(): JSX.Element {
  const user = useRecoilValue(userState);
  return (
    <Container>
      <Heading>
        <StyledAppLogo source={require("../assets/blue-pattern.jpg")} />
        <StyledTitle>USER PROFILE</StyledTitle>
      </Heading>

      <View>
        <StyledTextTitle>First name: </StyledTextTitle>
        <StyledTextInforAnwser>
          {user.firstName ? user.firstName : "Your first name"}
        </StyledTextInforAnwser>
        <StyledTextTitle>Last name: </StyledTextTitle>
        <StyledTextInforAnwser>
          {user.lastName ? user.lastName : "Your last name"}
        </StyledTextInforAnwser>
        <StyledTextTitle>Email: </StyledTextTitle>
        <StyledTextInforAnwser>
          {user.email ? user.email : "Your email address"}
        </StyledTextInforAnwser>
        <StyledTextTitle>Gender: </StyledTextTitle>
        <StyledTextInforAnwser>
          {user.gender ? user.gender : "Your gender"}
        </StyledTextInforAnwser>
        <EditProfileModal></EditProfileModal>
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

const Heading = styled.View`
  flex-direction: row;
  position: relative;
  top: -50px;
  justify-content: space-arround;
  align-items: center;
`;

const StyledTitle = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: #0d571b;
  margin-left: 24px;
`;

const StyledAppLogo = styled.Image<Props>`
  width: 32px;
  height: 32px;
  margin-left: 10px;
`;

const StyledTextTitle = styled.Text`
  height: 24px;
  font-size: 18px;
`;

const StyledTextInforAnwser = styled.Text`
  height: 50px;
  border: 1px solid teal;
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 5px 5px 20px;
`;

const View = styled.View`
  width: 90vw;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 20px;
  margin-top: -32px;
`;

export default ProfileScreen;
