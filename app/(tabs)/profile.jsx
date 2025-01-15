import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import { React, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import { EmptyState, SearchInput, Trending, VideoCard } from '../../components'
import { getUserPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import { useLocalSearchParams } from 'expo-router'
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const { query } = useLocalSearchParams();

  const { data: posts } = useAppWrite(
    () => getUserPosts(user.$id)
  );

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View
            className="my-6 px-4">
            <Text
              className="font-pmedium text-sm text-gray-100">
              User Profile
            </Text>
            <Text
              className="text-2xl font-psemibold text-white">
              {/* {query} */}
            </Text>
            <View
              className="mt-6 mb-8">
              {/* <SearchInput
                initialQuery={query}
              /> */}
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