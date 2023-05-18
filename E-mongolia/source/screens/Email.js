import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

export default function Email() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Feather style={styles.menu} name="menu" />
        <Text style={styles.uil}>Имэйл</Text>
        <MaterialCommunityIcons style={styles.scan} name="line-scan" />
        <Octicons style={styles.bell} name="bell" />
      </View>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>

          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.mmm}>
              <AntDesign style={styles.mail} name="mail" />
            </View>
            <View style={styles.mm}>
              <Text style={styles.z}>notification@e-mongolia.mn</Text>
              <Text style={styles.zz}>
                Алсын хараа 2050 : Үндэсний нэгдмэл үнэт зүйл
              </Text>
              <Text style={styles.zzz}>2023-05-15 11:58</Text>
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
    marginLeft: 80,
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
    marginLeft: 117,
  },
  view2: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 700,
    borderRadius: 20,
    overflow: "hidden",
  },
  mail: {
    color: "blue",
    fontSize: 20,
  },
  mmm: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e6eef5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  view3: {
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
  },
  mm: {
    width: 300,
    marginTop: 15,
    marginLeft: 10,
  },
  z: {
    color: "#9fc5e8",
    fontSize: 12,
  },
  zz: {
    color: "#072461",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5,
  },
  zzz: {
    color: "#9fc5e8",
    fontSize: 12,
    marginTop: 5,
  },
  view4: {
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    marginTop: 1.5,
  },
});
