import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../shared/constants';
import { colors } from '../shared/constants';
import { CustomButton } from '../shared/components';
import { useGlobalContext } from '../shared/context/GlobalProvider';

export default function App() {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) {
        return <Redirect href="/home" />;
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                {/* Main content container */}
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    {/* Logo image */}
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    {/* Cards image */}
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                    {/* Section : Main heading */}
                    <View className="relative mt-5">
                        {/* Title text */}
                        <Text className="text-3xl text-white font-bold text-center">
                            Explore Infinite Horizons,
                            {"\n"}
                            Possibilities with
                            {" "}
                            <Text className="text-secondary-200">
                                VidBox
                            </Text>
                        </Text>
                        {/* Decorative image */}
                        <Image
                            source={images.path}
                            className="w-[136px] h-[12px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>
                    {/* Subheading text */}
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                    Where Creativity and Innovation Lead the Way: Begin Your Journey with VidBox.
                    </Text>
                    {/* Custom sign-in button */}
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => {
                            router.push("/sign-in");
                        }}
                        containerStyles="w-[85%]"
                    />
                </View>
            </ScrollView>
            {/* Status bar */}
            <StatusBar
                backgroundColor={colors.primaryBackground}
                style="light"
            />
        </SafeAreaView>
    );
}
