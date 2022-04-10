import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Favourite } from "../../../components/favourites/favourite.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/Typography/index";
import {
  CardStyle,
  CoverImage,
  IconImage,
  IconsWrapper,
  Info,
  Rating,
  Row,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYHPqr3B3gQF_fdB6arOnBsVkkZ4_KlwrPspvAHuh0DG7uHYspsRraaSLV5Cr-VK6slU&usqp=CAU",
    photos = [
      "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  // console.log("restaurant.restaurant");
  // console.log(restaurant);
  return (
    <CardStyle>
      <Favourite restaurant={restaurant} />
      <CoverImage
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <IconsWrapper>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <IconImage
                source={{
                  uri: icon,
                }}
              />
            </Spacer>
          </IconsWrapper>
        </Row>
        <Text variant="caption">{address}</Text>
      </Info>
    </CardStyle>
  );
};
