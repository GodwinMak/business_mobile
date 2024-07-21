import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";
import Reviews from "../../components/BusinessDetail/Reviews";

export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBusinessDetail({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "ActionButton":
        return <ActionButton business={businessDetail} />;
      case "About":
        return <About business={businessDetail} />;
      case "Reviews":
        return <Reviews business={businessDetail} />;
      default:
        return null;
    }
  };

  const data = [
    { type: "ActionButton" },
    { type: "About" },
    { type: "Reviews" },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{ marginTop: "70%" }}
        />
      ) : (
        <>
          <View style={{ paddingBottom: 10 }}>
            <Intro business={businessDetail} />
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.type}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
          />
        </>
      )}
    </SafeAreaView>
  );
}
