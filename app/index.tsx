import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Login = () => {
  const route = useRouter()
  const handlePress = () => {
    route.replace('home');
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={handlePress}>
          <Text>Login</Text>
        </Pressable>
        <Link href={'/register'} asChild>
          <Pressable>
            <Text>Create account</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );

};

export default Login;