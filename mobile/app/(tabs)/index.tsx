import { API_URL } from "@/lib/consts";
import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["index"],
    queryFn: async () => {
      const data = await fetch(API_URL).then(
        (res) => res.json() as Promise<{ message: string }>
      );

      return data;
    },
  });

  return (
    <View className="p-8">
      <Text className="text-xl">Index</Text>
      <Text>{isLoading ? "Loading..." : data?.message}</Text>
    </View>
  );
}
