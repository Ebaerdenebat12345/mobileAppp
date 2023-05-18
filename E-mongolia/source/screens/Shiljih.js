import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Shiljih({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign style={styles.left} name="left" />
      </Pressable>
      <Text style={styles.txt}>Зорчигч</Text>
      <Text style={styles.txt1}>Хот хоорондын авто замын хураамж төлөх</Text>
      <View style={styles.view1}>
        <View>
          <Text style={styles.t}>Төлбөр</Text>
          <Text style={styles.tt}>0₮</Text>
        </View>
        <View>
          <Text style={styles.ttt}>Хугацаа</Text>
          <Text style={styles.tttt}>Шууд</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.u}>Үйлчилгээ авах</Text>
      </View>
      <Text style={styles.c}>Үйлчилгээний тухай</Text>
      <View style={styles.v}>
        <Text style={styles.vv}>
          Аймаг нийслэлийн автозамаар зорьчсон тээврийн хэрэгсэлийн замыни
          хураамжийн төлбөрийг цахимаар төлөх боломжийг бүрдүүлэх юм.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  left: {
    fontSize: 25,
    color: "blue",
    margin: 15,
  },
  txt: {
    color: "grey",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  txt1: {
    color: "#073763",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  view1: {
    flexDirection: "row",
    backgroundColor: "#ecf3fa",
    width: 330,
    height: 80,
    borderRadius: 10,
    marginLeft: 23,
    marginTop: 20,
  },
  t: {
    color: "#306494",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 15,
    marginLeft: 30,
  },
  tt: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 30,
  },
  ttt: {
    color: "#306494",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 15,
    marginLeft: 100,
  },
  tttt: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 100,
  },
  view2: {
    backgroundColor: "blue",
    width: 330,
    height: 52,
    borderRadius: 8,
    marginLeft: 23,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  u: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  c: {
    color: "blue",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 40,
  },
  v: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  vv: {
    color: "#2a3e8f",
    fontSize: 13,
  },
});
