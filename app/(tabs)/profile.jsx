import { React } from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';

import { icons } from '../../shared/constants';
import { routes } from '../../shared/constants/strings';
import useAppwrite from '../../shared/api/useAppwrite';
import { useGlobalContext } from "../../shared/context/GlobalProvider";
import { getUserPosts, signOut } from '../../shared/api/appwrite';
import { EmptyState, InfoBox, VideoCard } from "../../shared/components";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace(routes.SIGN_IN);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        // Profile header
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-2 px-4">
            {/* Logout button */}
            <TouchableOpacity
              className="w-full items-end"
              onPress={logout}>
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* User avatar */}
            <View
              className="w-32 h-32 border border-2 border-gray-100 rounded-full justify-center items-center"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 2,
              }}>
              <Image
                source={{ uri: user?.avatar }}
                className="w-[95%] h-[95%] rounded-full"
                resizeMode="cover"
              />
            </View>
            {/* Username */}
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-2xl"
            />
            {/* Stats */}
            <View
              className="mb-4 flex-row">
              <InfoBox
                title={posts?.length || 0}
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
        // Render video card
        renderItem={({ item }) => <VideoCard video={item} />}
        // Empty state
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No Videos Found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;