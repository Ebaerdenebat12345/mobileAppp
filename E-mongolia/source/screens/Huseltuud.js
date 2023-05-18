import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

export default function Huseltuud() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Feather style={styles.menu} name="menu" />
        <Text style={styles.uil}>Миний авсан</Text>
        <MaterialCommunityIcons style={styles.scan} name="line-scan" />
        <Octicons style={styles.bell} name="bell" />
      </View>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Feather style={styles.a} name="search" />
            <TextInput style={styles.aa}>Хүсэлтийн дугаараар хайх</TextInput>
          </View>
          <View style={styles.view4}>
            <Text style={styles.b}>Мэдээлэл олдсонгүй</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  view1: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    height: 60,
  },
  menu: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  scan: {
    color: "white",
    fontSize: 25,
    marginLeft: 55,
  },
  bell: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
  },
  uil: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 93,
  },
  view2: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 700,
    borderRadius: 20,
  },
  view3: {
    flexDirection: "row",
    width: 330,
    height: 50,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  a: {
    color: "blue",
    fontSize: 20,
    marginLeft: 15,
  },
  aa: {
    color: "lightgrey",
    fontSize: 15,
    marginLeft: 15,
  },
  view4: {
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  b: {
    color: "#9fc5e8",
  },
});
