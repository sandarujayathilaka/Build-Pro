import { View, Text } from "react-native";
import React from "react";

export function calDoneQty(rest,expectedqun) {
  const result = expectedqun -rest;
  return result;
}
