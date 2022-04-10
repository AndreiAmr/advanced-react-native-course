import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../Restaurant/compact-restaurant-info.component";
import { Spacer } from "../Spacer";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites = [], onDetail }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;

          return (
            <Spacer key={key} position={"left"} size="medium">
              <TouchableOpacity
                onPress={() => onDetail("RestaurantDetail", restaurant)}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
