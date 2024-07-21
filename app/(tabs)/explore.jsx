import { View, Text, TextInput } from "react-native";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import Category from "../../components/Home/Category"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
export default function explore() {

  const getBusinessByCategory = async(category)=>{
      const q = query(collection(db, "BusinessList"), where("category", "==", category))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        console.log(doc.data())
      })
  }
  return (
    <View style={{ padding: 20, marginTop: 10 }}>
      <Text style={{ fontFamily: "spaceMono", fontSize: 25, fontWeight: 600 }}>
        Explore More
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "spaceMono", fontSize: 16 }}
        />
      </View>
      <Category explore={true} onCategorySelect={(category)=> getBusinessByCategory(category)} />
    </View>
  );
}