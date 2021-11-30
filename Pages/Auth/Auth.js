import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  KeyboardAvoidingView,
} from "react-native";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import authStyles from "./authStyles";

const Auth = (props) => {
  const [authScreen, setAuthScreen] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () =>
    createUserWithEmailAndPassword(props.userAuth, email, password);

  const loginUser = () =>
    signInWithEmailAndPassword(props.userAuth, email, password);

  useEffect(() => {
    if (props.userId !== "") props.navigation.navigate("Home");
  }, [props.userId]);

  return (
    <KeyboardAvoidingView style={authStyles.container}>
      <Text>{authScreen === "Register" ? "Register User" : "User Login"}</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={authStyles.input}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={authStyles.input}
      />
      <View style={authStyles.buttonGroup}>
        <Pressable
          onPress={() => {
            setAuthScreen(authScreen === "Register" ? "Login" : "Register");
          }}
        >
          <Text>or {authScreen === "Register" ? "Login" : "Register"}</Text>
        </Pressable>
        <Pressable
          onPress={authScreen === "Register" ? registerUser : loginUser}
          style={authStyles.submitButton}
        >
          <Text style={authStyles.submitButtonText}>
            {authScreen === "Register" ? "Register" : "Login"}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
