import React from "react";
import { View, ActivityIndicator, Dimensions, Platform } from "react-native";

const Loader = ({
  isLoading = false, // Default value
  color = "#fff", // Default spinner color
  overlayOpacity = 0.6, // Default overlay opacity
}) => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;

  if (!isLoading) return null;

  return (
    <View
      className="absolute flex justify-center items-center w-full z-10"
      style={{
        height: screenHeight,
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
      }}
      accessibilityLabel="Loading indicator"
      accessibilityRole="alert"
    >
      <ActivityIndicator
        animating={isLoading}
        color={color}
        size={osName === "ios" ? "large" : 50}
      />
    </View>
  );
};
// Memoize the component to prevent unnecessary re-renders
export default React.memo(Loader); 
