import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Donor() {
  return (
    <View>
      <Link href={"/market/book"}>Book</Link>
    </View>
  );
}
