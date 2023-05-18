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
  AntDesign,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Feather style={styles.menu} name="menu" />
        <Text style={styles.uil}>Профайл</Text>
        <MaterialCommunityIcons style={styles.scan} name="line-scan" />
        <Octicons style={styles.bell} name="bell" />
      </View>
      <ScrollView>
        <View style={styles.q}>
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
                source={require("../../source/images/qrr.jpg")}
              />
            </View>
          </View>
          <Text style={styles.x}>Хэрэгцээт үйлдлүүд</Text>
          <View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <Ionicons style={styles.mail} name="people-outline" />
              </View>
              <Text style={styles.cc}>Өрхийн гишүүдийн мэдээлэл</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <SimpleLineIcons style={styles.mail} name="graduation" />
              </View>
              <Text style={styles.cc}>Оюутан танд</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <AntDesign style={styles.mail} name="mail" />
              </View>
              <Text style={styles.cc}>Нийгмийн даатгал</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <FontAwesome5 style={styles.mail} name="hand-holding-heart" />
              </View>
              <Text style={styles.cc}>Нийгмийн халамж</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <FontAwesome5 style={styles.mail} name="hospital" />
              </View>
              <Text style={styles.cc}>Эрүүл мэнд</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <FontAwesome style={styles.mail} name="money" />
              </View>
              <Text style={styles.cc}>Үнэт цааснууд / хувьцаа</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <FontAwesome5 style={styles.mail} name="coins" />
              </View>
              <Text style={styles.cc}>Зээлийн мэдээлэл</Text>
            </View>
            <View style={styles.c}>
              <View style={styles.mmm}>
                <FontAwesome5 style={styles.mail} name="hand-holding-usd" />
              </View>
              <Text style={styles.cc}>Татвар</Text>
            </View>
          </View>
          <Text style={styles.x}>Тээврийн хэрэгсэл</Text>
          <View style={styles.hh}>
            <Text style={styles.cc}>
              Таны нэр дээр тээврийн хэрэгсэл бүртгэлгүй байна.
            </Text>
          </View>
          <Text style={styles.x}>Компианууд</Text>
          <View style={styles.c}>
            <Text style={styles.cc}>
              Таны нэр дээр компани бүртгэлгүй байна.
            </Text>
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
    marginLeft: 70,
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
    backgroundColor: "white",
    height: 160,
  },
  a: {
    color: "grey",
    fontSize: 12,
    marginTop: 5,
  },
  aa: {
    color: "#072461",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  aaa: {
    color: "blue",
    fontSize: 12,
    marginTop: 5,
  },
  qr: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 20,
  },
  vw1: {
    marginLeft: 20,
    marginTop: 25,
  },
  uil: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 107,
  },
  q: {
    backgroundColor: "#f2f4f5",
    overflow: "hidden",
    borderRadius: 20,
    height: 1000,
  },
  x: {
    color: "blue",
    fontSize: 15,
    fontWeight: "500",
    margin: 15,
  },
  mail: {
    color: "blue",
    fontSize: 20,
  },
  mmm: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#e6eef5",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  c: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    width: 330,
    marginLeft: 25,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#d0e0e3",
    marginTop: 8,
  },
  cc: {
    color: "#073763",
    marginLeft: 15,
  },
  hh: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    width: 330,
    marginLeft: 25,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#d0e0e3",
    marginTop: 8,
  },
});
