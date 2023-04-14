import * as React from "react";
import styled from "styled-components/native";
import { useRecoilState } from "recoil";
import { View } from "react-native";
import {
  Modal,
  Portal,
  Button,
  TextInput,
  SegmentedButtons,
} from "react-native-paper";
import { userState } from "../App";

const EditProfileModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    height: 550,
  };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View>
      <Portal>
        <StyledModal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <CloseButton onPress={hideModal}>
            <StyledText>X</StyledText>
          </CloseButton>
          <StyledTextTitle>First name: </StyledTextTitle>
          <StyledTextInput
            mode="outlined"
            label="Enter your first name..."
            value={fName}
            onChangeText={(text) => setFName(text)}
            outlineColor={"teal"}
            activeOutlineColor={"teal"}
          />
          <StyledTextTitle>Last name: </StyledTextTitle>
          <StyledTextInput
            mode="outlined"
            label="Enter your last name..."
            value={lName}
            onChangeText={(text) => setLName(text)}
            outlineColor={"teal"}
            activeOutlineColor={"teal"}
          />
          <StyledTextTitle>Email: </StyledTextTitle>
          <StyledTextInput
            mode="outlined"
            label="Enter your email..."
            value={email}
            onChangeText={(text) => setEmail(text)}
            outlineColor={"teal"}
            activeOutlineColor={"teal"}
          />
          <StyledTextTitle>Gender: </StyledTextTitle>
          {/* <StyledTextInput
            mode="outlined"
            label="Enter your gender..."
            value={gender}
            onChangeText={(text) => setGender(text)}
            outlineColor={"teal"}
            activeOutlineColor={"teal"}
          /> */}
          <StyledGenderSegment
            value={gender}
            onValueChange={setGender}
            buttons={[
              {
                value: "male",
                label: "Male",
                checkedColor: "teal",
              },
              {
                value: "female",
                label: "Female",
                checkedColor: "teal",
              },
            ]}
          />
          <StyledButton
            mode="contained"
            onPress={() => {
              setUser({
                ...user,
                firstName: fName,
                lastName: lName,
                email,
                gender,
              });
              hideModal();
            }}
          >
            Save
          </StyledButton>
        </StyledModal>
      </Portal>
      <StyledButton mode="contained" onPress={showModal}>
        Edit Profile
      </StyledButton>
    </View>
  );
};

const StyledModal = styled(Modal)``;

const CloseButton = styled(Button)`
  position: fixed;
  top: 64px;
  right: -4px;
`;

const StyledButton = styled(Button)`
  height: 50px;
  width: 100%;
  background-color: #0d571b;
  justify-content: center;
  margin-top: 10px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #ccc;
`;

const StyledTextTitle = styled.Text`
  height: 24px;
  font-size: 18px;
`;

const StyledTextInput = styled(TextInput)`
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const StyledGenderSegment = styled(SegmentedButtons)`
  border-radius: 10px;
  height: 50px;
`;

export default EditProfileModal;
