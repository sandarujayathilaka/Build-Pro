import React from "react";
import { SafeAreaView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
//import Lists from "../src/screens/Lists";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderItems from "../src/screens/OrderItems";
const Tab = createMaterialTopTabNavigator();

function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <View>
      <OrderItems/>
      </View>
      {/* <Tab.Navigator>
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
      </Tab.Navigator> */}
    </SafeAreaView>
  );
}

export default Index;
