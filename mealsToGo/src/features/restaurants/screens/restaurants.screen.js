import React, { useState, useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/Spacer";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantInfo } from "../components/restaurant-info-card";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";
import { FadeInView } from "../../../components/animation/fade.animation";

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsSceen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const theme = useTheme();
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites, addFavourite, removeFromFavourites } =
    useContext(FavouritesContext);

  const handleNavigate = (restaurant) => {
    navigation.navigate("RestaurantDetail", restaurant);
  };

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <Spacer>
          <Text> Favourites </Text>
          <FavouritesBar
            favourites={favourites}
            onDetail={navigation.navigate}
          />
        </Spacer>
      )}
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={colors.ui.error} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
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
      )}
    </SafeArea>
  );
};
