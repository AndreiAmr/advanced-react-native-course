import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const directionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (direction, size, theme) => {
  const sizeIndex = sizesVariant[size];
  const directionValue = directionVariant[direction];
  const sizeValue = theme.space[sizeIndex];

  return `${directionValue}:${sizeValue}`;
};

export const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();

  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
