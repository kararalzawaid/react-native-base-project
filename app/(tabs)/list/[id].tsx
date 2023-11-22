
import React from 'react';
import { Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const ListDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Stack.Screen options={{ headerTitle: `List number ${id}` }} />
        <Text>THIS IS {id}</Text>
      </View>
    </>
  );

};

export default ListDetails;