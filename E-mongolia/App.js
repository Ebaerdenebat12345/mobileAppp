import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Nuur from "./source/screens/Nuur";
import Uilchilgee from "./source/screens/Uilchilgee";
import Huseltuud from "./source/screens/Huseltuud";
import Email from "./source/screens/Email";
import Profile from "./source/screens/Profile";
import Shiljih from "./source/screens/Shiljih";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <HomeStack.Screen name="home" component={Nuur} />
      <HomeStack.Screen name="search" component={Uilchilgee} />
      <HomeStack.Screen name="add" component={Huseltuud} />
      <HomeStack.Screen name="real" component={Email} />
      <HomeStack.Screen name="profile" component={Profile} />
      <HomeStack.Screen name="shiljih" component={Shiljih} />
    </HomeStack.Navigator>
  );
}
function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Нүүр") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Үйлчилгээ") {
              iconName = focused ? "grid" : "grid-outline";
            } else if (rn === "Хүсэлтүүд") {
              iconName = focused ? "md-briefcase" : "md-briefcase-outline";
            } else if (rn === "Имейл") {
              iconName = focused ? "mail" : "mail-outline";
            } else if (rn === "Профайл") {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "white",
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "grey",
          tabBarlabelStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen
          name="Нүүр"
          component={HomeStackNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Үйлчилгээ"
          component={Uilchilgee}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Хүсэлтүүд"
          component={Huseltuud}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Имейл"
          component={Email}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Профайл"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;
