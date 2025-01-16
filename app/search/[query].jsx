import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { colors } from '../../shared/constants';
import useAppwrite from '../../shared/api/useAppwrite';
import { searchPosts } from '../../shared/api/appwrite';
import { EmptyState, SearchInput, VideoCard } from "../../shared/components";


const Search = () => {
  const { query } = useLocalSearchParams();

  const { data: posts, refetch, isLoading, error } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Search Results List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View
            className="my-6 px-4">
            {/* Title text */}
            <Text
              className="font-pmedium text-sm text-gray-100">
              Search Results
            </Text>
            {/* Query text */}
            <Text
              className="text-2xl font-psemibold text-white">
              {query || "Search"}
            </Text>
            {/* Search input */}
            <View
              className="mt-6 mb-8">
              <SearchInput
                initialQuery={query}
              />
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <VideoCard
            video={item}
          />
        )}
        ListEmptyComponent={() =>
          isLoading ? (
            <Text
              className="text-gray-100 text-center mt-6">
              Loading...
            </Text>
          ) : (
            <EmptyState
              title="No Videos Found"
              subtitle="No Videos Found for this search query"
            />
          )
        }
      />
      {/* Display API Error */}
      {error && (
        <Text
          className="text-red-500 text-center mt-4">
          Failed to load results. Please try again.
        </Text>
      )}
      {/* Status bar */}
      <StatusBar
        backgroundColor={colors.primaryBackground}
        style="light"
      />
    </SafeAreaView>
  );
};

export default Search;