import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router'
import { useGlobalContext } from "../../context/GlobalProvider";
import { Loader } from "../../components";

const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <Loader
        isLoading={loading}
      />
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </>
  )
}

export default AuthLayout