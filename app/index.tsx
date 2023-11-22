import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Button, YStack } from "tamagui";
// import MapView, { Marker } from "react-native-maps";

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState(null);

  return (
    <YStack p="$6">
      <Link href={"/map"} asChild>
        <Button>
          <Text>Find Market</Text>
        </Button>
      </Link>
    </YStack>
  );
}
