import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-psemibold">Open</Text>
      <StatusBar style="auto" />
      <Link href="./profile" style={{ color: "red" }}>
        Go to Profile
      </Link>
    </View>
  );
}
