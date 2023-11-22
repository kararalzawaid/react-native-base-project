import React from "react";
import { Button } from "react-native";
import { Stack, useRouter } from "expo-router";

const StackLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default StackLayout;