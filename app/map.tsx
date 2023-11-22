import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "expo-router";

const markets = [
  {
    name: "Mercado de Surquillo",
    latitude: -12.1172,
    longitude: -77.0299,
    donors: 8,
  },
  {
    name: "Mercado de Magdalena",
    latitude: -12.0956,
    longitude: -77.063,
    donors: 6,
  },
  {
    name: "Mercado Central de Lima",
    latitude: -12.0493,
    longitude: -77.0241,
    donors: 10,
  },
  {
    name: "Mercado de San Isidro",
    latitude: -12.0984,
    longitude: -77.0351,
    donors: 5,
  },
  {
    name: "Mercado de San Miguel",
    latitude: -12.0735,
    longitude: -77.0957,
    donors: 7,
  },
  {
    name: "Mercado de Miraflores",
    latitude: -12.1221,
    longitude: -77.0301,
    donors: 4,
  },
  {
    name: "Mercado de Santa Anita",
    latitude: -12.0413,
    longitude: -76.9714,
    donors: 3,
  },
  {
    name: "Mercado de Chorrillos",
    latitude: -12.1859,
    longitude: -77.0091,
    donors: 5,
  },
  {
    name: "Mercado de La Victoria",
    latitude: -12.0749,
    longitude: -77.0152,
    donors: 6,
  },
  {
    name: "Mercado de Barranco",
    latitude: -12.1441,
    longitude: -77.0206,
    donors: 4,
  },
];

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
            onPress={() => navigation.navigate("market")}
          />
        ))}
      </MapView>
    </View>
  );
}
