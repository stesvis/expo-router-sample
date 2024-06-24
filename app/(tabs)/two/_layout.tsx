import { Stack } from "expo-router";

type TabTwoLayoutPageProps = {};

const TabTwoLayoutPage = (props: TabTwoLayoutPageProps) => {
  return (
    <Stack initialRouteName="two" screenOptions={{ headerShown: false }} />
  );
};

export default TabTwoLayoutPage;
