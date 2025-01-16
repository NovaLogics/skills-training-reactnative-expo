import { Dimensions } from 'react-native';
import { React, useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { icons } from '../constants';

const VideoCard = ({
    video: {
        title,
        thumbnail,
        video,
        creator: {
            username,
            avatar
        }
    }
}) => {
    const { width } = Dimensions.get('window');
    const [play, setPlay] = useState(false);

    return (
        <View
            className="flex-col items-center px-4 mb-14">
            {/* Divider */}
            <View
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#232533',
                    marginBottom: 16,
                }}
            />
            {/* Creator information */}
            <View
                className="flex-row gap-3 items-start">
                <View
                    className="justify-center items-center flex-row flex-1">
                    {/* User Avatar */}
                    <View className="w-[46px] h-[46px] rounded-full border border-2 border-secondary-200 justify-center items-center ">
                        <Image
                            source={{ uri: avatar }}
                            className="w-full h-full rounded-full"
                            resizeMode="cover"
                        />
                    </View>
                    <View
                        className="justify-center flex-1 ml-3 gap-y-1">
                        <Text
                            className="text-white text-sm font-psemibold" numberOfLines={1}>
                            {title}
                        </Text>
                        <Text
                            className="text-gray-100 text-xs font-pregular" numberOfLines={1}>
                            {username}
                        </Text>
                    </View>
                </View>
                {/* Menu icon */}
                <View className="pt-2">
                    <Image
                        source={icons.menu}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Video || thumbnail*/}
            {play ? (
                // Video player when play is true
                <Video
                    source={{ uri: video }}
                    className="w-full h-60 rounded-xl mt-4 bg-white/10"
                    style={{
                        width: width,
                        height: 280,
                        marginTop: 8,
                        backgroundColor: "#161622",
                    }}
                    resizeMode={ResizeMode.CONTAIN}
                    useNativeControls
                    shouldPlay
                    onPlaybackStatusUpdate={(status) => {
                        if (status.didJustFinish) {
                            setPlay(false);
                        }
                    }}
                />
                //  <FullScreenVideo videoUri={video} />
            ) : (
                // Thumbnail view when video is not playing
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                    className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                >
                    <Image
                        source={{ uri: thumbnail }}
                        className="w-full h-full rounded-xl mt-3"
                        resizeMode="cover"
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View >

    );
};

export default VideoCard;
