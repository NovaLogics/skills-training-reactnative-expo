import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'

const SignIn = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn