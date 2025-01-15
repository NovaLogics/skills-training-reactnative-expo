import { View, Text, FlatList, Image, RefreshControl, Alert, TouchableOpacity } from 'react-native'
import { React, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import { EmptyState, InfoBox, SearchInput, Trending, VideoCard } from '../../components'
import { getUserPosts, signOut } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import { router, useLocalSearchParams } from 'expo-router'
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from '../../constants';

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const { query } = useLocalSearchParams();

  const { data: posts } = useAppWrite(
    () => getUserPosts(user.$id)
  );

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  }

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View
            className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}>
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View
              className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View
              className="mt-5 flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                containerStyles="mr-10"
                titleStyles="text-lg"
              />
              <InfoBox
                title="500+"
                subtitle="Followers"
                titleStyles="text-lg"
              />
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <VideoCard
            video={item}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No Videos Found for this search query"
          />
        )}
      />
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </SafeAreaView>
  )
}

export default Profile