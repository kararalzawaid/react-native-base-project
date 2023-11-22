import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Profile = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Link href={'/'} asChild>
          <Pressable>
            <Text>Create account</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );

};

export default Profile;