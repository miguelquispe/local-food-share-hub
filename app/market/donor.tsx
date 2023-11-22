import React, { useState } from "react";
import { Link } from "expo-router";
import {
  Button,
  Checkbox,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonApp } from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Donor() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

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
            <Text fontSize="$6">GreenFields</Text>
            <Text fontSize="$4">OWNER: Ana Martínez</Text>
            <Text fontSize="$4">STAND: 209</Text>
          </YStack>
        </XStack>
        <Text fontSize={"$6"} fontWeight={"700"}>
          Products:
        </Text>
        <ScrollView>
          <YStack f={1} gap={"$4"} borderRadius={"$4"} bg={"white"} p="$4">
            <XStack gap="$2" justifyContent="space-between">
              <View>
                <Text>1 kg Potato</Text>
              </View>
              <View>
                <Checkbox size={"$4"} onCheckedChange={() => handleChange(1)}>
                  <Checkbox.Indicator>
                    <FontAwesome name="check" size={16} />
                  </Checkbox.Indicator>
                </Checkbox>
              </View>
            </XStack>
            <XStack gap="$2" justifyContent="space-between">
              <View>
                <Text>3 Apples</Text>
              </View>
              <View>
                <Checkbox size={"$4"} onCheckedChange={() => handleChange(2)}>
                  <Checkbox.Indicator>
                    <FontAwesome name="check" size={16} />
                  </Checkbox.Indicator>
                </Checkbox>
              </View>
            </XStack>
            <XStack gap="$2" justifyContent="space-between">
              <View>
                <Text>500grs Tomatoes</Text>
              </View>
              <View>
                <Checkbox size={"$4"} onCheckedChange={() => handleChange(3)}>
                  <Checkbox.Indicator>
                    <FontAwesome name="check" size={16} />
                  </Checkbox.Indicator>
                </Checkbox>
              </View>
            </XStack>
          </YStack>
        </ScrollView>
        <Link href={"/market/book"} asChild>
          <ButtonApp disabled={selectedProducts.length === 0}>
            <Text color={"white"}>Pick up</Text>
          </ButtonApp>
        </Link>
      </Stack>
    </SafeAreaView>
  );
}
