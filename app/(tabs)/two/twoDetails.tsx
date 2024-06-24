import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

type TwoDetailsPageProps = {};

const TwoDetailsPage = (props: TwoDetailsPageProps) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={styles.title}>TwoDetails Page</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        lightColor="rgba(100,100,255,0.8)"
        darkColor="rgba(100,100,255,0.8)"
        onPress={() => router.back()}
        style={{ fontSize: 20 }}
      >
        Go Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TwoDetailsPage;
