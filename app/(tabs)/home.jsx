import { SafeAreaView } from 'react-native-safe-area-context';
import { React, useState } from 'react';
import { View, Text, FlatList, Image, RefreshControl } from 'react-native';

import { images } from '../../shared/constants';
import useAppwrite from '../../shared/api/useAppwrite';
import { useGlobalContext } from "../../shared/context/GlobalProvider";
import { getAllPosts, getLatestPosts } from '../../shared/api/appwrite';
import { EmptyState, SearchInput, Trending, VideoCard } from "../../shared/components";

const Home = () => {
  const { user } = useGlobalContext();
  const { data: latestPosts, refetch: refetchLatest } = useAppwrite(getLatestPosts);
  const { data: posts, refetch: refetchAll } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetchAll();
    await refetchLatest();
    setRefreshing(false);
  };

  return (
    <SafeAreaView
      className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        // Header component
        ListHeaderComponent={() => (
          <View className={`my-6 px-4 space-y-6 min-h-[${posts.length === 0 ? "0" : "460px"}]`}>
            {/* Welcome message */}
            <View
              className="justify-between items-start flex-row mb-6">
              <View>
                <Text
                  className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text
                  className="text-2xl font-psemibold text-white">
                  {user.username ?? "User"}
                </Text>
              </View>
              {/* Logo */}
              <View
                className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* Search input */}
            <SearchInput />
            {/* Latest videos */}
            <View
              className="w-full flex-1 pt-5 pb-4">
              <Text
                className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending
                posts={latestPosts ?? []}
              />
            </View>
          </View>
        )}
        // Render video card
        renderItem={({ item }) => <VideoCard video={item} />}
        // Empty state
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        // Refresh control
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;