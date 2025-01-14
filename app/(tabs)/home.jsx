import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import { React, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import { EmptyState, SearchInput, Trending } from '../../components'
import { getAllPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'


const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const { data: posts, refetch } = useAppWrite(getAllPosts)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={(item) => (
          <View
            className="my-6 px-4 space-y-6">
            <View
              className="justify-between items-start flex-row mb-6">
              <View>
                <Text
                  className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text
                  className="text-2xl font-psemibold text-white">
                  User
                </Text>
              </View>

              <View
                className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain" />

              </View>
            </View>

            <SearchInput />

            <View
              className="w-full flex-1 pt-5 pb-8">
              <Text
                className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />

            </View>

          </View>
        )}
        renderItem={({ item }) => (
          <Text
            className="text-3xl text-white">
            {item.title}
          </Text>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Home