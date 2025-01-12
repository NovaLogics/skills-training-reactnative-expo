import { View, Text, ScrollView, Image } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import { FormField } from '../../components'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]" />

          <Text
            className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Login to VidBox
          </Text>

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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn