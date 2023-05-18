import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

export default function Uilchilgee() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Feather style={styles.menu} name="menu" />
        <Text style={styles.uil}>Үйлчилгээ</Text>
        <MaterialCommunityIcons style={styles.scan} name="line-scan" />
        <Octicons style={styles.bell} name="bell" />
      </View>
      <View style={styles.blue}>
        <View style={styles.search}>
          <AntDesign style={styles.sea} name="search1" />
          <TextInput style={styles.txtinput}>
            Үйлчилгээний нэрээр хайх...
          </TextInput>
        </View>
      </View>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.vw1}>
            <View style={styles.vw2}>
              <Text>Нийт 165 үйлчилгээ</Text>
              <AntDesign name="sync" />
            </View>
            <Text>Шүүж хайх:</Text>
            <View style={styles.vw3}>
              <View style={styles.vw4}>
                <Text>Ангилал</Text>
                <AntDesign name="down" />
              </View>
            </View>
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
    marginBottom: 60,
  },
  view1: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 15,
  },
  menu: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  scan: {
    color: "white",
    fontSize: 25,
    marginLeft: 60,
  },
  bell: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
  },
  uil: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 95,
  },
  search: {
    backgroundColor: "white",
    width: 340,
    height: 50,
    borderRadius: 3,
    flexDirection: "row",
    marginLeft: 18,
    marginTop: 27,
    alignItems: "center",
  },
  blue: {
    height: 90,
    backgroundColor: "blue",
  },
  sea: {
    color: "blue",
    fontSize: 20,
    marginLeft: 13,
  },
  txtinput: {
    color: "#6897dd",
    fontSize: 15.5,
    marginLeft: 10,
  },
  view2: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 1000,
    borderRadius: 20,
    overflow: "hidden",
  },
  vw1: {
    backgroundColor: "white",
    height: 100,
  },
  vw2: {
    flexDirection: "row",
    alignItems: "center",
  },
  vw3: {
    flexDirection: "row",
  },
  vw4: {
    flexDirection: "row",
  },
});
