import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const List = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Link href={'/list/1'} asChild>
          <Text>1</Text>
        </Link>
        <Link href={'/list/2'} asChild>
          <Text>2</Text>
        </Link>
        <Link href={'/list/3'} asChild>
          <Text>3</Text>
        </Link>
      </View>
    </>
  );

};

export default List;