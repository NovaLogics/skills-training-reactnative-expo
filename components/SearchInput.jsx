import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { React, useState } from 'react'

import { icons } from '../constants'
import { router, usePathname } from 'expo-router'

const SearchInput = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    keyboardType,
    ...props
}) => {

    const pathName = usePathname();
    const [query, setQuery] = useState("")

    return (
        <View
            className="border-2 border-gray-100 w-full h-16px-4 bg-black-100 
            rounded-3xl focus:border-secondary items-center flex-row space-x-4 pl-4 pr-4">
            <TextInput
                className="flex-1 text-white font-pregular text-base mt-0.5"
                value={value}
                placeholder="Search for a video topic"
                placeholderTextColor="#CDCDE0"
                onChangeText={(event) => setQuery(event)}
            />

            <TouchableOpacity
                onPress={() => {
                    if (!query) {
                        return Alert.alert(
                            "Missing Query",
                            "Please input something to search in video gallery"
                        )
                    }

                    if (pathName.startsWith("/search")) {
                        router.setParams({ query })
                    }
                    else {
                        router.push(`/search/${query}`)
                    }
                }}>
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode="contain" />

            </TouchableOpacity>

        </View>
    )
}

export default SearchInput