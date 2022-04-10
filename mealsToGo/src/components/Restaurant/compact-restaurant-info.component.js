import React from "react";
import styled from "styled-components/native";
import { Text } from "../Typography";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export function CompactRestaurantInfo({ restaurant, isMap }) {
  const isAndroid = Platform.OS === "android";
  return (
    <Item>
      {isAndroid && isMap ? (
        <CompactWebview source={{ uri: restaurant?.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant?.photos[0] }} />
      )}
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
}
