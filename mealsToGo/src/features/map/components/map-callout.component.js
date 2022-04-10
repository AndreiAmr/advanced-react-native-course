import React from "react";
import { CompactRestaurantInfo } from "../../../components/Restaurant/compact-restaurant-info.component";

function MapCallout({ restaurant }) {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
}

export default MapCallout;
