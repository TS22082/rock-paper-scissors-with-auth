import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import "./firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  const userAuth = getAuth();
  const [userId, setUserId] = useState("");
  // Listen for authentication state to change.

  useEffect(() => {
    onAuthStateChanged(userAuth, (user) => {
      if (user != null) setUserId(user.uid);
      else setUserId("");
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          options={{
            title: "Auth Screen",
            headerTitleAlign: "center",
          }}
        >
          {(props) => <Auth {...props} userId={userId} userAuth={userAuth} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{
            title: "User Home Screen",
            headerTitleAlign: "center",
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} userId={userId} userAuth={userAuth} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
