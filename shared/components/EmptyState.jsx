import React from 'react'
import { router } from 'expo-router'
import { View, Text, Image } from 'react-native'

import { images } from '../constants'
import CustomButton from './CustomButton'

const EmptyState = ({
    title,
    subtitle
}) => {
    return (
        <View
            className="justify-center items-center px-4">
            {/* Empty State Image */}
            <Image
                source={images.empty}
                className="w-[270px] h-[215px]"
                resizeMode="contain"
            />
            {/* Title */}
            <Text
                className="text-xl text-center font-psemibold text-white mt-2">
                {title}
            </Text>
            {/* Subtitle */}
            <Text
                className="font-pmedium text-sm text-gray-100">
                {subtitle}
            </Text>
            {/* Action Button*/}
            <CustomButton
                title="Create video"
                handlePress={() => router.push("/create")}
                containerStyles="w-full my-5"
            />
        </View>
    )
}

export default EmptyState