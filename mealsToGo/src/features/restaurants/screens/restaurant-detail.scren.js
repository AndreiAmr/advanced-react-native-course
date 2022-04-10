import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info-card";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const theme = useTheme();

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          titleStyle={{
            fontFamily: theme.fonts.body,
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Clasic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          titleStyle={{
            fontFamily: theme.fonts.body,
          }}
        >
          <List.Item title="Burger w/ fries" />
          <List.Item title="Stack Sandwich" />
          <List.Item title="Mashroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          titleStyle={{
            fontFamily: theme.fonts.body,
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Four Cheese Pizza" />
          <List.Item title="Lamem miojo" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          titleStyle={{
            fontFamily: theme.fonts.body,
          }}
        >
          <List.Item title="Coke Soda" />
          <List.Item title="Hot Chocolate" />
          <List.Item title="Cold Milk" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
