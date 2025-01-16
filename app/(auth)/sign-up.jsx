import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';

import { images } from '../../shared/constants';
import { createUser } from '../../shared/api/appwrite';
import { Link, router } from 'expo-router';
import { messages, routes } from '../../shared/constants/strings';
import { useGlobalContext } from '../../shared/context/GlobalProvider';
import { CustomButton, FormField } from "../../shared/components";

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert(messages.ERROR, messages.FILL_FIELDS);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(
        form.email,
        form.password,
        form.username
      );
      setUser(result);
      setIsLogged(true);
      router.replace(routes.HOME);
    } catch (error) {
      Alert.alert(messages.ERROR, error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView
      className="bg-primary h-full">
      {/* Main container */}
      <ScrollView>
        <View
          className="w-full min-h-[83vh] justify-center px-4 my-6">
          {/* Logo */}
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          {/* Title text */}
          <Text
            className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to VidBox
          </Text>
          {/* Username field */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(event) => setForm({ ...form, username: event })}
            otherStyles="mt-10"
          />
          {/* Email field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(event) => setForm({ ...form, email: event })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          {/* Password field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(event) => setForm({ ...form, password: event })}
            otherStyles="mt-7"
            isPasswordField={true}
          />
          {/* Sign Up button */}
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="w-[85%] mt-4"
            isLoading={isSubmitting}
          />
          {/* Redirect to Sign In */}
          <View
            className="justify-center pt-5 flex-row gap-2">
            <Text
              className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href={routes.SIGN_IN}
              className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
