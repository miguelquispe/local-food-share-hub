import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
// import MapView, { Marker } from "react-native-maps";

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <Link href={"/map"} asChild>
        <TouchableOpacity>
          <Text>Find Market</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
