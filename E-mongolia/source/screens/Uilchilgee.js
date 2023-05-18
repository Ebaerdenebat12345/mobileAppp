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
              <Text style={styles.a}>Нийт 165 үйлчилгээ</Text>
              <AntDesign style={styles.aa} name="sync" />
            </View>
            <Text style={styles.aaa}>Шүүж хайх:</Text>
            <View style={styles.vw3}>
              <View style={styles.vw4}>
                <Text style={styles.d}>Ангилал</Text>
                <AntDesign style={styles.dd} name="down" />
              </View>
              <View style={styles.vw4}>
                <Text style={styles.d}>Төрөл</Text>
                <AntDesign style={styles.dd} name="down" />
              </View>
              <View style={styles.vw4}>
                <Text style={styles.d}>Байгууллага</Text>
                <AntDesign style={styles.dd} name="down" />
              </View>
            </View>
          </View>
          <View style={styles.view3}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.ntxt}>Жолоодох эрх, тээврийн хэрэгсэл</Text>
            <Text style={styles.nn}>Жолоочийн лавлагаа, мэдээлэл</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
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
    height: 130,
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
    backgroundColor: "#e5edef",
    width: 110,
    height: 30,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 12,
  },
  a: {
    color: "blue",
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 20,
  },
  aa: {
    color: "blue",
    marginLeft: 170,
    marginTop: 35,
    fontSize: 20,
  },
  aaa: {
    color: "#598bba",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 8,
  },
  d: {
    color: "blue",
  },
  dd: {
    color: "#9fc5e8",
    marginLeft: 5,
  },
  view3: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    marginTop: 1.5,
  },
  ntxt: {
    color: "#708aa2",
    marginTop: 15,
    marginLeft: 30,
  },
  nn: {
    color: "#072461",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 30,
  },
  nnn: {
    color: "#072461",
    fontWeight: "500",
    marginLeft: 180,
    fontSize: 13,
  },
  vw7: {
    flexDirection: "row",
    marginTop: 23,
    alignItems: "center",
  },
  vw8: {
    backgroundColor: "#f2f4f5",
    width: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginLeft: 20,
  },
  s: {
    color: "blue",
    fontSize: 12,
    fontWeight: "500",
  },
  sss: {
    color: "#072461",
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 13,
  },
  view4: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    marginTop: 10,
  },
});
