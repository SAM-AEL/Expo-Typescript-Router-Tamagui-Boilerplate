import { View, Text } from "tamagui";

export default function Index() {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      flex={1}
      marginBottom="$2"
    >
      <Text color="white" fontSize={24} fontFamily="$monospace">
        You are awesome!
      </Text>
      <Text color="white" opacity={0.4} fontSize={10} fontFamily="$body">
        github.com/SAM-AEL/Expo-Typescript-Router-Tamagui-Boilerplate
      </Text>
    </View>
  );
}
