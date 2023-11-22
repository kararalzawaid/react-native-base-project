import React from "react";
import { Button } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const StackLayout = () => {
  const router = useRouter();
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'home',
          headerTitle: 'Home Screen',
          tabBarIcon: ({ color, size }) => <FontAwesome name="list" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          headerTitle: 'My Profile',
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />
        }}
      />
<Tabs.Screen
        name="list"
        options={{
          tabBarLabel: 'List',
          headerTitle: 'My List',
          tabBarIcon: ({ color, size }) => <FontAwesome name="newspaper-o" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}

export default StackLayout;