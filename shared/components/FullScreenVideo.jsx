import React, { useRef, useState } from "react";
import { Dimensions, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

const { width, height } = Dimensions.get("window");

const FullScreenVideo = ({ videoUri }) => {
  const videoRef = useRef(null); // Ref for the Video component
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen state

  const handleEnterFullScreen = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.presentFullscreenPlayer(); // Enter fullscreen
        setIsFullScreen(true);
      } catch (error) {
        console.error("Error entering fullscreen:", error);
      }
    }
  };

  const handleExitFullScreen = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.dismissFullscreenPlayer(); // Exit fullscreen
        setIsFullScreen(false);
      } catch (error) {
        console.error("Error exiting fullscreen:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleEnterFullScreen}
      >
        <Text style={styles.buttonText}>Play Full Screen</Text>
      </TouchableOpacity>

      <Video
        ref={videoRef}
        source={{ uri: videoUri }}
        style={{
          width: isFullScreen ? width : width - 40, // Adjust based on fullscreen
          height: isFullScreen ? height : 200,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            console.log("Video playback finished");
          }
        }}
        onFullscreenUpdate={({ fullscreenUpdate }) => {
          if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_DISMISS) {
            setIsFullScreen(false); // Update state when exiting fullscreen
          } else if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT) {
            setIsFullScreen(true); // Update state when entering fullscreen
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FullScreenVideo;
