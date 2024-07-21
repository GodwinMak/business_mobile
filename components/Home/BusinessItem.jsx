import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import {useRouter} from "expo-router"

export default function BusinessItem({ business }) {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={()=> router.push("/businessdetail/"+business.id)}
      style={{
        marginLeft: 10,
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 10,
        marginRight: 10,
      }}
    >
      <Image
        source={{
          uri: business.imageUrl,
        }}
        style={{ width: 200, height: 150, borderRadius: 15 }}
      />
      <View style={{ marginTop: 7, width: 200, gap: 5 }}>
        <Text style={{ fontFamily: "spaceMono", fontSize: 14 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "spaceMono", fontSize: 13, color: Colors.GRAY }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Text style={{ fontFamily: "spaceMono" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "spaceMono",
              backgroundColor: Colors.PRIMARY,
              color: "#fff",
              padding: 3,
              fontSize: 10,
              borderRadius: 5,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
