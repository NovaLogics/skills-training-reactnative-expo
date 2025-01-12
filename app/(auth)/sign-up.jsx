import { View, Text, ScrollView, Image } from 'react-native'
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import { CustomButton, FormField } from '../../components'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full min-h-[83vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]" />

          <Text
            className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to VidBox
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(event) => setForm({
              ...form,
              username: event
            })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(event) => setForm({
              ...form,
              email: event
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(event) => setForm({
              ...form,
              password: event
            })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View
            className="justify-center pt-5 flex-row gap-2">
            <Text
              className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary" >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp