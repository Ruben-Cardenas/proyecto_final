import React from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator />
    </>
  );
}
