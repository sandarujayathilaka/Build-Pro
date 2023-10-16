import React from "react";
import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import Lists from "../../src/screens/Lists";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="Pending"
          component={Lists}
          initialParams={{ status: "Pending" }}
        />
        <Tab.Screen
          name="Accepted"
          component={Lists}
          initialParams={{ status: "Approved" }}
        />
        <Tab.Screen
          name="Rejected"
          component={Lists}
          initialParams={{ status: "Rejected" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default home;
