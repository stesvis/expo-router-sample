import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        onPress={() => router.navigate("/two/twoDetails")}
        lightColor="rgba(100,100,255,0.8)"
        darkColor="rgba(100,100,255,0.8)"
        style={{ fontSize: 20 }}
      >
        Go to Tab 2 details
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
