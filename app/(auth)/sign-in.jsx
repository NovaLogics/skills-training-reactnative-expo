import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { React, useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'

import { images } from '../../shared/constants'
import { useGlobalContext } from "../../shared/context/GlobalProvider";
import { messages, routes } from '../../shared/constants/strings';
import { getCurrentUser, signIn } from '../../shared/api/appwrite'
import { CustomButton, FormField } from "../../shared/components";

const SignIn = () => {

  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert(messages.ERROR, messages.FILL_FIELDS)
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      const result = await getCurrentUser();

      setUser(result);
      setIsLogged(true);

      Alert.alert(messages.SUCCESS, messages.SIGN_IN_SUCCESS);

      router.replace(routes.HOME);

    } catch (error) {
      Alert.alert(messages.ERROR, error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[60vh] justify-center px-4 my-24">
          {/* Logo image */}
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          {/* Title text */}
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Login to VidBox
          </Text>
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
          {/* Sign In button */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="w-[85%] mt-4"
            isLoading={isSubmitting}
          />
          {/* Sign Up link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link
              href={routes.SIGN_UP}
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;
