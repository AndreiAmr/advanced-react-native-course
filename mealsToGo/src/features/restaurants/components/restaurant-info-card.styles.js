import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const CardStyle = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
  elevation: 9;
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[4]} 0 0;
`;

export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const IconsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CoverImage = styled(Card.Cover)``;

export const ClosedTemporarily = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.ui.error};
`;

export const IconImage = styled.Image`
  padding: ${(props) => props.theme.space[2]};
`;
