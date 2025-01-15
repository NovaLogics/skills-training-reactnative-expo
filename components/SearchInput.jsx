import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'

import { icons } from '../constants'

const SearchInput = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    keyboardType,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View
            className="border-2 border-gray-100 w-full h-16px-4 bg-black-100 
            rounded-3xl focus:border-secondary items-center flex-row space-x-4 pl-4 pr-4">
            <TextInput
                className="flex-1 text-white font-pregular text-base mt-0.5"
                value={value}
                placeholder="Search for a video topic"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassword}
            />

            <TouchableOpacity>
                <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"/>

            </TouchableOpacity>

        </View>
    )
}

export default SearchInput