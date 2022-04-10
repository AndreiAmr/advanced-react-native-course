import styled from "styled-components/native";
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${(props) => props.theme.space[3]};
`;
