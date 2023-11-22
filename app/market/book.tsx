import React, { useState } from "react";
import { Link } from "expo-router";
import {
  Button,
  Checkbox,
  Image,
  Label,
  ScrollView,
  Select,
  Stack,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonApp } from "../../components/Button";
import { Input } from "tamagui";
import { RadioGroup } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Book() {
  // const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "bottom"]}>
      <Stack p="$4" f={1} gap="$4" bg={"$yellow4Light"}>
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
              Name Market
            </Text>
            <Text fontSize="$4">OWNER: Miguel</Text>
            <Text fontSize="$4">STAND: 209</Text>
          </YStack>
        </XStack>
        <Text fontSize={"$6"} fontWeight={"700"}>
          You will pick up:
        </Text>
        <YStack gap="$2">
          <Text fontSize="$4">1kg Potatoes</Text>
          <Text fontSize="$4">2 Apples</Text>
        </YStack>
        <Text fontSize={"$6"} fontWeight={"700"}>
          Enter Your Information:
        </Text>
        <Stack f={1}>
          <YStack f={1}>
            <Stack gap={"$2"}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </Stack>
            <Stack gap={"$2"}>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" />
            </Stack>
            <View>
              <Label htmlFor="pick">Pick up time:</Label>
              <RadioGroup value="11" space="$2" name="hour">
                <XStack gap="$4">
                  <XStack gap="$4" alignContent="center" alignItems="center">
                    <RadioGroup.Item value="10" id="hour-10">
                      <RadioGroup.Indicator />
                    </RadioGroup.Item>
                    <Label>10:00 am</Label>
                  </XStack>
                  <XStack gap="$4" alignItems="center">
                    <RadioGroup.Item value="11" id="hour-11">
                      <RadioGroup.Indicator />
                    </RadioGroup.Item>
                    <Label>11:00 am</Label>
                  </XStack>
                  <XStack gap="$4" alignItems="center">
                    <RadioGroup.Item value="12" id="hour-12">
                      <RadioGroup.Indicator />
                    </RadioGroup.Item>
                    <Label>12:00 pm</Label>
                  </XStack>
                </XStack>
              </RadioGroup>
            </View>
          </YStack>
          <Link href={"/market/success"} asChild>
            <ButtonApp>
              <Text color={"white"}>Confirm Pickup</Text>
            </ButtonApp>
          </Link>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
}
