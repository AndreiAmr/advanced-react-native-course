import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safe-area.component";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/screens/restaurants.screen";

import { Spacer } from "../../../components/Spacer";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info-card";

const FavouritesArea = styled(SafeArea)`
  /* align-items: center; */
  /* justify-content: center; */
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  const handleNavigate = (restaurant) => {
    navigation.navigate("RestaurantDetail", restaurant);
  };

  return favourites.length ? (
    <FavouritesArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              handleNavigate({
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfo key={item.name} restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index}
      />
    </FavouritesArea>
  ) : (
    <FavouritesArea>
      <RestaurantList></RestaurantList>
    </FavouritesArea>
  );
};
