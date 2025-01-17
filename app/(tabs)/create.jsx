import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { VideoView, useVideoPlayer } from "expo-video";
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

import { icons } from '../../shared/constants';
import { createVideo } from '../../shared/api/appwrite';
import { useGlobalContext } from "../../shared/context/GlobalProvider";
import { CustomButton, FormField } from "../../shared/components";
import { mediaType, messages, routes } from '../../shared/constants/strings';

const Create = () => {
  const { user } = useGlobalContext();
  const { width } = Dimensions.get("window");
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: ""

  })

  const openPicker = async (selectType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [`${selectType}`],
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (selectType === mediaType.IMAGES) {
        setForm({ ...form, thumbnail: result.assets[0] });
      }

      if (selectType === mediaType.VIDEOS) {
        setForm({ ...form, video: result.assets[0] });
      }
    }

  }

  const submit = async () => {
    if (!form.prompt || !form.title || !form.thumbnail || !form.video) {
      return Alert.alert(messages.INCOMPLETE_FIELDS, messages.FILL_FIELDS)
    }
    setUploading(true);

    try {
      await createVideo({
        ...form,
        userId: user.$id
      });

      Alert.alert(messages.SUCCESS, messages.POST_SUCCESS)

      router.push(routes.HOME)
    } catch (error) {
      Alert.alert(messages.ERROR, error.message)
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: ""
      })
      setUploading(false)
    }
  }

  const player = useVideoPlayer(form.video ?? "", (player) => {
    player.showNowPlayingNotification = false;
    player.allowsFullscreen
    // player.loop = true;
    // player.play();
  });

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <ScrollView
        className="px-4">
        <Text
          className="text-2xl text-white font-psemibold mt-8">
          Upload Video
        </Text>
        {/* Video Title Field */}
        <FormField
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catchy title..."
          handleChangeText={(text) => setForm({ ...form, title: text })}
          otherStyles="mt-10"
        />
        {/* Video Upload Section */}
        <View
          className="mt-7 space-y-2">
          <Text
            className="text-base text-gray-100 font-pmedium">
            Upload Video
          </Text>
          <TouchableOpacity
            onPress={() => openPicker(mediaType.VIDEOS)}>
            {form.video ? (
              <View
                style={{
                  width: width,
                  height: 120,
                  borderRadius: 4,
                  marginTop: 12,
                  marginBottom: 4,
                  backgroundColor: "#161622",
                }}
                pointerEvents="none"
              >
                <VideoView
                  style={{
                    width: width,
                    height: 120,
                  }}
                  player={player}
                  nativeControls={false}
                  onError={(error) => {
                    console.error("Error loading video:", error);
                    setPlay(false);
                  }}
                />
              </View>
            ) : (
              <View
                className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View
                  className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        {/* Thumbnail Upload Section */}
        <View
          className="mt-7 space-y-2">
          <Text
            className="text-base text-gray-100 font-pmedium mb-2">
            Thumbnail Image
          </Text>
          <TouchableOpacity
            onPress={() => openPicker(mediaType.IMAGES)}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="contain"
                className="w-full h-48 rounded-2xl"
              />
            ) : (
              <View
                className="w-full h-20 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text
                  className="text-sm text-gray-100 font-pmedium ml-4">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        {/* AI Prompt Field */}
        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="Describe the AI prompt used for this video"
          handleChangeText={(text) => setForm({ ...form, prompt: text })}
          otherStyles="mt-7"
        />
        {/* Submit Button */}
        <CustomButton
          title="Submit & Publish"
          handlePress={submit}
          containerStyles="w-[85%] mt-8 mb-12"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;