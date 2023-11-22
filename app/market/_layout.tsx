import { View, Text } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { Button, H2 } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function marketLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Market Profile",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/map")}>
              <FontAwesome name="chevron-left" size={16} color={"blue"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="donor"
        options={{
          title: "Stand Profile",
        }}
      />
      <Stack.Screen
        name="book"
        options={{
          title: "Pickup",
        }}
      />
      <Stack.Screen
        name="success"
        options={{
          title: "Success Pick up",
          headerBackButtonMenuEnabled: false,
        }}
      />
    </Stack>
  );
}
