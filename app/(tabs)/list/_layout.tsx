import React from "react";
import { Button } from "react-native";
import { Stack, useRouter } from "expo-router";

const ListLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'List details' }} />
    </Stack>
  );
}

export default ListLayout;