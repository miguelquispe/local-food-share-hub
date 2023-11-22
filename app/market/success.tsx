import React, { useState } from "react";
import { Link } from "expo-router";
import { Button, Heading, Image, Text, XStack, YStack } from "tamagui";
// import MapView, { Marker } from "react-native-maps";
import { color } from "@tamagui/themes";

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState(null);

  return (
    <YStack f={1} p="$6" justifyContent="center" bg={"$yellow4Light"}>
      <YStack gap={"$2"} mb="$10">
        <Heading textAlign="center" fontSize={30} color={"$green10"}>
          CONGRATS!!!
        </Heading>
        <Heading textAlign="center">
          Today you can pick up your products at 11:00 a.m.
        </Heading>
      </YStack>
      <XStack bg={"white"} p="$4" gap="$4" borderRadius={"$4"} mb="$4">
        <Image
          source={{
            uri: require("../../assets/images/app/fruit-shop.png"),
            width: 60,
            height: 60,
          }}
        />
        <YStack gap="$2">
          <Text fontSize="$6" fontWeight={"700"}>
            Mercado Central
          </Text>
          <Text fontSize="$4">OWNER: Miguel</Text>
          <Text fontSize="$4">STAND: 209</Text>
        </YStack>
      </XStack>
    </YStack>
  );
}
