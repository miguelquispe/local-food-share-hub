import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import appConfig from "../tamagui.config";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerLeft: () => (
                <FontAwesome.Button
                  name="bars"
                  size={24}
                  backgroundColor="transparent"
                  onPress={() => {
                    console.log("pressed");
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="map"
            options={{
              title: "Nearby Markets",
            }}
          />
          <Stack.Screen
            name="market"
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name=r"modal" options={{ presentation: "modal" }} /> */}
        </Stack>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
