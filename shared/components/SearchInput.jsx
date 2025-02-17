import React, { useState } from 'react';
import { router, usePathname } from 'expo-router';
import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import { icons } from '../constants';

const SearchInput = ({ initialQuery }) => {

    const pathName = usePathname();
    const [query, setQuery] = useState(initialQuery || "");

    return (
        <View
            className="border-2 border-gray-100 w-full h-16px-4 bg-black-100 
      rounded-3xl focus:border-secondary items-center flex-row space-x-4 pl-4 pr-4">
            {/* Search Input Field */}
            <TextInput
                className="flex-1 text-white font-pregular text-base mt-0.5"
                value={query}
                placeholder="Search for a video topic"
                placeholderTextColor="#CDCDE0"
                onChangeText={(event) => setQuery(event)}
            />
            {/* Search Button */}
            <TouchableOpacity
                onPress={() => {
                    // If query is empty, show an alert
                    if (!query) {
                        return Alert.alert(
                            "Missing Query",
                            "Please input something to search in video gallery"
                        );
                    }

                    if (pathName.startsWith("/search")) {
                        router.setParams({ query });
                    }
                    else {
                        router.push(`/search/${query}`);
                    }
                }}
            >
                {/* Search Icon */}
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
            </TouchableOpacity>

        </View>
    );
};

export default SearchInput;
