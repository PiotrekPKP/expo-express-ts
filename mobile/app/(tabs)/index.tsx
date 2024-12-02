import { useEffect } from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  console.log("Hello from HomeScreen!", process.env.EXPO_PUBLIC_API_URL!);

  useEffect(() => {
    fetch(process.env.EXPO_PUBLIC_API_URL!)
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return (
    <View className="p-8">
      <Text className="text-xl">Index</Text>
    </View>
  );
}
