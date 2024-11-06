import { Tabs } from "expo-router";
/* @tutinfo Import <CODEIonicons</CODE> icon set.*/
import Ionicons from "@expo/vector-icons/Ionicons";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerStyle: {
          backgroundColor: "#00008b",
        },
        headerShadowVisible: true,
        headerTintColor: "#fff",
        tabBarStyle: {
          // backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo The <CODE>focused</CODE> param allows us to change a tab's icon and label behavior when it is active and inactive.*/
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fun"
        options={{
          title: "Fun",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo */
            <Ionicons
              name={
                focused ? "game-controller-sharp" : "game-controller-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="xlCare"
        options={{
          title: "XL Care",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo */
            <Ionicons
              name={
                focused ? "headset-sharp" : "headset-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo */
            <Ionicons
              name={
                focused ? "person-sharp" : "person-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
