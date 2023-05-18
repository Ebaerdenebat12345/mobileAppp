import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";

export default function Nuur() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Feather style={styles.menu} name="menu" />
        <Image
          style={styles.logo}
          source={require("../../source/images/logo.jpg")}
        />
        <MaterialCommunityIcons style={styles.scan} name="line-scan" />
        <Octicons style={styles.bell} name="bell" />
      </View>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.vw1}>
            <Image
              style={styles.pro}
              source={require("../../source/images/logo.jpg")}
            />
            <Text style={styles.a}>Өдрийн мэнд!</Text>
            <Text style={styles.aa}>Б.ЭРДЭНЭБАТ</Text>
            <Text style={styles.aaa}>12345678965434e-mongolia.mn</Text>
          </View>
          <View>
            <Image
              style={styles.qr}
              source={require("../../source/images/qr.jpg")}
            />
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.vw2}>
            <View style={styles.vw3}>
              <View style={styles.vw5}>
                <Text style={styles.t}>
                  Хот хоорондын авто замын хураамж төлөх
                </Text>
                <Text style={styles.tt}>Зам ашигласны төлбөр</Text>
              </View>
              <Image
                style={styles.n}
                source={require("../../source/images/n.jpg")}
              />
            </View>
            <View style={styles.zuraas}></View>
            <View style={styles.vw4}>
              <Ionicons style={styles.car} name="car-outline" />
              <Text style={styles.ttt}>Үйлчилгээ авах</Text>
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
  },
  view1: {
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  menu: {
    color: "white",
    fontSize: 25,
    marginLeft: 20,
  },
  logo: {
    width: 155,
    height: 35,
    marginLeft: 55,
  },
  scan: {
    color: "white",
    fontSize: 25,
    marginLeft: 40,
  },
  bell: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
  },
  pro: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  view2: {
    flexDirection: "row",
  },
  a: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  aa: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  aaa: {
    color: "white",
    fontSize: 13,
    marginTop: 5,
  },
  qr: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 30,
  },
  vw1: {
    marginLeft: 20,
    marginTop: 25,
  },
  view3: {
    backgroundColor: "#f2f4f5",
    width: "100%",
    height: 1000,
    borderRadius: 20,
    marginTop: 25,
  },
  vw2: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 340,
    height: 150,
    marginLeft: 20,
    marginTop: 20,
  },
  vw3: {
    flexDirection: "row",
  },
  vw4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  vw5: {
    width: 250,
  },
  n: {
    width: 80,
    height: 70,
    marginTop: 35,
  },
  zuraas: {
    borderBottomWidth: 1.5,
    borderColor: "#f2f4f5",
  },
  t: {
    color: "#072461",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 15,
  },
  tt: {
    color: "#b8c1c2",
    marginLeft: 15,
    marginTop: 8,
  },
  car: {
    color: "red",
    fontSize: 25,
    marginLeft: 15,
  },
  ttt: {
    color: "#072461",
    fontWeight: "500",
    marginLeft: 8,
  },
});
