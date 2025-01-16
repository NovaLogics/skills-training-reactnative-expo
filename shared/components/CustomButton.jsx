import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}) => {
    return (
        <TouchableOpacity
            className={`bg-secondary-200 rounded-full min-h-[54px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            {/* Title text */}
            <Text
                className={`text-primary font-psemibold text-xl ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
