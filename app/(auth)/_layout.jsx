import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

import { Loader } from '../../shared/components';
import { colors } from '../../shared/constants';
import { useGlobalContext } from '../../shared/context/GlobalProvider';

const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      {/* Navigation stack */}
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sign-up"
          options={{ headerShown: false }}
        />
      </Stack>
      {/*Loading state */}
      <Loader
        isLoading={loading}
      />
      {/* Status bar */}
      <StatusBar
        backgroundColor={colors.primaryBackground}
        style="light"
      />
    </>
  );
}

export default AuthLayout;
