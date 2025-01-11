import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Hello world! </Text>
            <Text>&</Text>
            <Text>We are live!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
