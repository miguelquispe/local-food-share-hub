import React, { useState } from "react";
import { Link } from "expo-router";
import { Button, Heading, Stack, Text, XStack, YStack } from "tamagui";
// import MapView, { Marker } from "react-native-maps";
import { color } from "@tamagui/themes";
import { ButtonApp } from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack f={1} p={"$3"} bg={"$yellow4Light"}>
        <XStack p="$4" borderRadius={20} bg={"white"}>
          <XStack gap="$4" f={1}>
            <FontAwesome name="user" size={20} />
            <Text>Little Stars Refuge</Text>
          </XStack>
          <FontAwesome name="bars" size={20} />
        </XStack>
        <YStack p="$6" justifyContent="center" f={1}>
          <YStack gap={"$2"} mb="$10">
            <Heading fontSize={30} textAlign="center" color={"$green10"}>
              LOCAL FOOD
            </Heading>
            <Heading fontSize={30} textAlign="center" color={"$green10"}>
              SHARE HUB
            </Heading>
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
      </YStack>
    </SafeAreaView>
  );
}
