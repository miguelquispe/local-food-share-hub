// import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  Button,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
// import { YStack } from 'tamagui';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DONORS } from "../../constants/Donors";

const MARKET_ID = 4;
export default function Market() {
  const MARKET_DONORS = DONORS.filter((donor) => donor.market === MARKET_ID);
  // console.log(TOTAL_DONORS);
  return (
    <Stack p="$4" f={1} gap="$4">
      <XStack bg={"white"} p="$4" gap="$4" borderRadius={"$4"}>
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
          <Text fontSize="$4">2 stands share food</Text>
        </YStack>
      </XStack>
      <Text fontSize={"$6"}>Stands:</Text>
      <ScrollView>
        <YStack gap="$4" f={1}>
          {MARKET_DONORS.map((donor, i) => {
            return (
              <Link key={i} href={{ pathname: "/market/donor" }} asChild>
                <Button bg={"white"} height={"auto"}>
                  <XStack gap={"$4"} px="$2" py="$4" f={1} alignItems="center">
                    <FontAwesome name="home" size={34} />
                    <YStack gap="$2">
                      <Text fontSize={"$6"} fontWeight={"bold"}>
                        {donor.tradename}
                      </Text>
                      <Text fontSize={"$4"} fontWeight={"bold"}>
                        OWNER: {donor.owner}
                      </Text>
                      <Text fontSize={"$4"} fontWeight={"bold"}>
                        STAND: {donor.stand}
                      </Text>
                    </YStack>
                    <FontAwesome
                      name="chevron-right"
                      size={20}
                      style={{
                        marginLeft: "auto",
                      }}
                    />
                  </XStack>
                </Button>
              </Link>
            );
          })}
          {/* <Link href={{ pathname: "/market/donor" }}>Donor</Link> */}
        </YStack>
      </ScrollView>
    </Stack>
  );
}
