import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "expo-router";
import { router } from "expo-router";
import { markets } from "../constants/Markets";

const initialRegion = {
  latitude: -12.046374,
  longitude: -77.042793,
  longitudeDelta: 0.04,
  latitudeDelta: 0.02,
};

export default function Map() {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const navigation = useNavigation();
  // const navigate  = useNavigate();

  return (
    <View style={{ flex: 1 }}>
      <MapView initialRegion={initialRegion} style={{ flex: 1 }}>
        {markets.map((market, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: market.latitude,
              longitude: market.longitude,
            }}
            title={market.name}
            image={require("../assets/images/app/fruit-shop.png")}
            onPress={() => router.push("/market")}
          />
        ))}
      </MapView>
    </View>
  );
}
