import { MainContainer } from "components/layout";
import { BigTitle, ColorText, Text } from "components/shared";
import { IntroValue } from "./text";

export const IntroSection = () => {
  return (
    <MainContainer>
      <BigTitle>
        <ColorText color={"purple"}>Adapt to world</ColorText> to Your Business
      </BigTitle>
      <Text>{IntroValue.text}</Text>
    </MainContainer>
  );
};
