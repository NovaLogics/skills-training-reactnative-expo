import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import GlobalProvider from '../shared/context/GlobalProvider';

import '../global.css'; 
import 'react-native-url-polyfill/auto'; 

// Prevent splash screen hide until fonts load
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    // Load custom fonts
    const [fontsLoaded, error] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    });

    useEffect(() => {
        if (error) {
            throw error;
        }

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }

    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <GlobalProvider>
            <Stack>
                {/* Main app screen */}
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />
                {/* Authentication screens */}
                <Stack.Screen
                    name="(auth)"
                    options={{ headerShown: false }}
                />
                {/* Tab based screens */}
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />
                {/* Search screen with dynamic query */}
                <Stack.Screen
                    name="search/[query]"
                    options={{ headerShown: false }}
                />
            </Stack>
        </GlobalProvider>
    );
};

export default RootLayout;
