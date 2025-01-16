import * as Animatable from "react-native-animatable";
import { ResizeMode, Video } from "expo-av";
import { useState, useEffect, memo, useRef } from "react";
import { VideoView, useVideoPlayer } from "expo-video";
import { FlatList, Image, ImageBackground, TouchableOpacity } from "react-native";
import { debounce } from 'lodash';

import { icons } from "../constants";

const zoomIn = {
    0: { scale: 0.9 },
    1: { scale: 1.1 },
};

const zoomOut = {
    0: { scale: 1.1 },
    1: { scale: 0.9 },
};

const TrendingItem = memo(({ activeItem, item }) => {
    const [play, setPlay] = useState(false);

    const player = useVideoPlayer(item.video, (player) => {
        player.showNowPlayingNotification = false;
        player.allowsFullscreen
        // player.loop = true;
        // player.play();
    });

    useEffect(() => {
        // Pause video if it's not the active item
        if (activeItem !== item.$id && play) {
            setPlay(false);
            player.pause();
        }
    }, [activeItem]);

    return (
        <Animatable.View
            key={item.$id}
            className="mr-5"
            animation={activeItem === item.$id ? zoomIn : zoomOut}
            duration={300}
        >
            {play ? (
                // Video playback view when 'play' is true
                //      <Video
                //      source={{ uri: item.video }}
                //      style={{
                //        width: 208,
                //        height: 288,
                //        borderRadius: 33,
                //        marginTop: 12,
                //        backgroundColor: "rgba(255, 255, 255, 0.1)",
                //      }}
                //      resizeMode={ResizeMode.CONTAIN}
                //      useNativeControls
                //      shouldPlay
                //      onError={(error) => {
                //        console.error("Error loading video:", error);
                //        setPlay(false);
                //      }}
                //    />
                <VideoView
                    style={{
                        width: 200,
                        height: 260,
                        borderRadius: 33,
                        marginTop: 12,
                        backgroundColor: "#000",
                    }}
                    player={player}
                    allowsFullscreen
                    nativeControls
                    allowsPictureInPicture
                    onError={(error) => {
                        console.error("Error loading video:", error);
                        setPlay(false);
                    }}
                />
            ) : (
                // Thumbnail view when video is not playing
                <TouchableOpacity
                    className="relative flex justify-center items-center"
                    activeOpacity={0.7}
                    onPress={() => { setPlay(true); player.play(); }}>
                    <ImageBackground
                        source={{ uri: item.thumbnail }}
                        className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode="cover"
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    );
});


const Trending = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0]?.$id || null);

    const debouncedSetActiveItem = useRef(
        debounce((id, setActive) => setActive(id), 200)
    ).current;

    const viewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const newActiveItem = viewableItems[0].item.$id;
            debouncedSetActiveItem(newActiveItem, setActiveItem);
        }
    };

    return (
        <FlatList
            data={posts}
            horizontal
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem
                    activeItem={activeItem}
                    item={item}
                />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170 }}
        />
    );
};

export default Trending;
