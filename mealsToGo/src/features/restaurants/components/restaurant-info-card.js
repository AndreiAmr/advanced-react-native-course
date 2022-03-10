import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: black;
  padding: 16px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Cover
        source={{
          uri: photos[0],
        }}
        style={styles.image}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 20,
  },
  title: {
    padding: 16,
  },
});
