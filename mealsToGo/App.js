import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Text>Search</Text>
      </View>

      <View style={styles.listView}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchView: {
    padding: 15,
    backgroundColor: "green",
  },

  listView: {
    flex: 1,
    padding: 15,
    backgroundColor: "blue",
  },
});
