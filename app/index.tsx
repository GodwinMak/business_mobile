import { Text, View } from "react-native";
import { Redirect } from "expo-router";
import React from "react";
export default function Index() {
  return (
    <Redirect href={'/home'}/>
  );
}
