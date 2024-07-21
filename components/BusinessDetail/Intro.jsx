import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function Intro({ business }) {

    const router = useRouter()
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: 7,
          paddingRight: 7,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="white" />
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: "100%", height: 300 }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{ fontSize: 20, fontFamily: "spaceMono", fontWeight: 800 }}
        >
          {business?.name}
        </Text>
        <Text
          style={{ fontSize: 18, fontFamily: "spaceMono", color: Colors.GRAY }}
        >
          {business?.address}
        </Text>
      </View>
    </View>
  );
}
