import styled from "styled-components/native";
import img from "../assets/blue-pattern.jpg";

function BottomPicture(): JSX.Element {
  return <Background source={img} resizeMode="stretch" />;
}

const Background = styled.ImageBackground`
  width: 100%;
  height: 62px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default BottomPicture;
