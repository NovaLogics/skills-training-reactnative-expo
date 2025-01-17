import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs, Redirect } from 'expo-router';
import { View, Text, Image } from 'react-native';

import { icons } from '../../shared/constants';
import { colors } from '../../shared/constants';
import { Loader } from '../../shared/components';
import { routes } from '../../shared/constants/strings';
import { useGlobalContext } from "../../shared/context/GlobalProvider";


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View
            className="items-center justify-center gap-2 mt-6">
            {/* NavBar Icon */}
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-7 h-7"
            />
            {/* NavBar Title */}
            <Text
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs w-16`}
                style={{ color: color, textAlign: 'center' }}
                numberOfLines={1}>
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && !isLogged) {
        return <Redirect href={routes.SIGN_IN} />;
    }

    return (
        <>
            {/* Tab navigation */}
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 64,
                        paddingBottom: 0,
                    },
                }}>
                {/* Home tab */}
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                {/* Create tab */}
                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        ),
                    }}
                />
                {/* Profile tab */}
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
            {/* Loader */}
            <Loader
                isLoading={loading}
            />
            {/* Status bar */}
            <StatusBar
                backgroundColor={colors.primaryBackground}
                style="light"
            />
        </>
    );
};

export default TabsLayout;
