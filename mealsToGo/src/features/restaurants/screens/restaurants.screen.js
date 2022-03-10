import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card";

export const RestaurantsSceen = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchValue}
          value={searchValue}
        />
      </View>

      <View style={styles.listView}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchView: {
    padding: 15,
  },

  listView: {
    flex: 1,
    padding: 15,
    backgroundColor: "blue",
  },
});
