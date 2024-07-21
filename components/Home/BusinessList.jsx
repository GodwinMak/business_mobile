import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import BusinessItem from "./BusinessItem";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);
  useEffect(()=>{
    GetBusinessList();
  },[])
  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, {id: doc.id, ...doc.data()}]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "spaceMono",
            fontWeight: 800,
          }}
        >
          Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "spaceMono" }}>
          View All
        </Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        style={{ marginLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <BusinessItem business ={item} key={index}/>}
      />
    </View>
  );
}
