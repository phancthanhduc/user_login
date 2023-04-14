import styled from "styled-components/native";

interface Props {
  source: string;
}

const imgUrl: string = require("./../assets/blue-pattern.jpg");
function BottomPicture(): JSX.Element {
  return <Background source={imgUrl} resizeMode="stretch" />;
}

const Background = styled.ImageBackground<Props>`
  width: 100%;
  height: 62px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default BottomPicture;
