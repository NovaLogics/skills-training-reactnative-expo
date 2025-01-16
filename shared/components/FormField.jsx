import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    keyboardType,
    isPasswordField = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View
            className={`space-y-2 ${otherStyles}`}>
            {/* Title text */}
            <Text
                className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            {/* Input field container */}
            <View
                className="border-2 border-gray-100 w-full h-16 px-4 bg-black-100 
                        rounded-3xl focus:border-secondary items-center flex-row mt-2">
                {/* TextInput View*/}
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={isPasswordField && !showPassword}
                />
                {/* Toggle visibility of password */}
                {isPasswordField && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
