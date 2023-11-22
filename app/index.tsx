import React, { useState } from "react";
import { Link } from "expo-router";
import { Button, Heading, Text, YStack } from "tamagui";
// import MapView, { Marker } from "react-native-maps";
import { color } from "@tamagui/themes";
import { ButtonApp } from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack p="$6" justifyContent="center">
        <YStack gap={"$2"} mb="$10">
          <Heading textAlign="center">LOCAL FOOD</Heading>
          <Heading textAlign="center">SHARE HUB</Heading>
        </YStack>
        <Link href={"/map"} asChild>
          <ButtonApp
            bg={"$green10Light"}
            pressStyle={{
              bg: "$green10Dark",
            }}
          >
            <Text color={"white"}>Find Markets</Text>
          </ButtonApp>
        </Link>
      </YStack>
    </SafeAreaView>
  );
}
