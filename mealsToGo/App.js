import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import firebase from "firebase";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDbD2AdfjoHATFGV_1pJ8UsSi4QkuesWi4",
  authDomain: "meals-to-go-edd7b.firebaseapp.com",
  projectId: "meals-to-go-edd7b",
  storageBucket: "meals-to-go-edd7b.appspot.com",
  messagingSenderId: "507700289286",
  appId: "1:507700289286:web:035aefe8f7f406ae820887",
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("mo@binni.io", "amaral")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
