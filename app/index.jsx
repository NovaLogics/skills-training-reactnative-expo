import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pextrabold">Hello world!</Text>
            <Text>&</Text>
            <Text>We are live!</Text>
 
            <StatusBar style="auto" />
            <Link href="/home" style={{ color: 'blue' }}>Home Screen</Link>
        </View>
    );
}
