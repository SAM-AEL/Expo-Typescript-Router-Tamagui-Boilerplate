import config from "@/tamagui.config";
import "@tamagui/core/reset.css";

import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, View, Text } from "tamagui";

import { SplashScreen, Slot } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    Miracode: require("@/assets/fonts/Miracode.ttf"),
    RethinkBold: require("@/assets/fonts/RethinkSans_Bold.ttf"),
    Rethink: require("@/assets/fonts/RethinkSans_Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <View
        backgroundColor="black"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Slot />

        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}
