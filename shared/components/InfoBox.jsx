import React from 'react';
import { View, Text } from 'react-native';

const InfoBox = ({
    title = "",
    subtitle = "",
    containerStyles = "",
    titleStyles = "",
}) => {
    return (
        <View
            className={containerStyles}>
            {/* Title */}
            <Text
                className={`text-white text-center font-psemibold ${titleStyles}`}
                accessibilityRole="header">
                {title}
            </Text>
            {/* Subtitle */}
            <Text
                className="text-sm text-gray-100 text-center font-pregular"
                accessibilityRole="text">
                {subtitle}
            </Text>
        </View>
    );
};

export default InfoBox;
