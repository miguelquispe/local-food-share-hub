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
        <YStack>
          <Text fontSize="$6">Name Market</Text>
          <Text fontSize="$4">Name Market</Text>
        </YStack>
      </XStack>
      <Text fontSize={"$6"}>Donors:</Text>
      <ScrollView>
        <YStack gap="$4" f={1}>
          {MARKET_DONORS.map((donor, i) => {
            return (
              <Link key={i} href={{ pathname: "/market/donor" }} asChild>
                <Button bg={"$blue10Light"} height={"auto"}>
                  <XStack gap={"$2"} p="$2" justifyContent="flex-start">
                    <FontAwesome name="book" size={30} />
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
