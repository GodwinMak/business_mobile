import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import BusinessList from "../../components/Home/BusinessList";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer}>
        <Slider />
        <Category />
        <BusinessList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});
