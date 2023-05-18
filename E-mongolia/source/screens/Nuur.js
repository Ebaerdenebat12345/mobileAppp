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
          <Text style={styles.tanid}>Таньд зориулсан</Text>
          <View style={styles.scll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.vw6}>
                <Text style={styles.d}>
                  Дээд боловсролын сургалтын байгууллагын дипломын тодорхойлолт
                </Text>
                <View style={styles.vw7}>
                  <View style={styles.vw8}>
                    <Text style={styles.s}>Лавлагаа</Text>
                  </View>
                  <Text style={styles.ss}>Төлбөргүй</Text>
                  <AntDesign style={styles.sss} name="right" />
                </View>
              </View>
              <View style={styles.vw6}>
                <Text style={styles.d}>
                  Авто тээврийн хэрэгсэл болон жолоочийн торгуулийн төлбөр төлөх
                </Text>
                <View style={styles.vw7}>
                  <View style={styles.vw8}>
                    <Text style={styles.s}>Лавлагаа</Text>
                  </View>
                  <Text style={styles.ss}>Төлбөргүй</Text>
                  <AntDesign style={styles.sss} name="right" />
                </View>
              </View>
              <View style={styles.vw6}>
                <Text style={styles.d}>
                  Иргэний эрүүгийн хариуцлага хүлээж байгаа эсэх тухай
                  тодорхойлолт
                </Text>
                <View style={styles.vw7}>
                  <View style={styles.vw8}>
                    <Text style={styles.s}>Лавлагаа</Text>
                  </View>
                  <Text style={styles.ss}>Төлбөргүй</Text>
                  <AntDesign style={styles.sss} name="right" />
                </View>
              </View>
              <View style={styles.vw6}>
                <Text style={styles.d}>
                  Нийгмийн даатгалын шимтгэл төлөлтийн талаарх тодорхойлолт
                </Text>
                <View style={styles.vw7}>
                  <View style={styles.vw8}>
                    <Text style={styles.s}>Лавлагаа</Text>
                  </View>
                  <Text style={styles.ss}>Төлбөргүй</Text>
                  <AntDesign style={styles.sss} name="right" />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.vw9}>
            <Text style={styles.tanid}>Ажил бүтээхэд тань тусалъя</Text>
            <Text style={styles.bugd}>Бүгд</Text>
            <AntDesign style={styles.icon} name="arrowright" />
          </View>
          <View style={styles.scrolll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.vw10}>
                <Text style={styles.b}>Бичиг баримт гээсэн</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/bag.gif")}
                />
              </View>
              <View style={styles.vw11}>
                <Text style={styles.b}>Жолооч танд</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/car.gif")}
                />
              </View>
              <View style={styles.vw12}>
                <Text style={styles.b}>Гэр бүл зохиох</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/family.gif")}
                />
              </View>
              <View style={styles.vw13}>
                <Text style={styles.b}>Хүүхэдтэй болсон</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/baby.gif")}
                />
              </View>
              <View style={styles.vw14}>
                <Text style={styles.b}>Аялалд явахаар төлөвлөж байгаа</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/world.gif")}
                />
              </View>
              <View style={styles.vw15}>
                <Text style={styles.b}>Орон сууц худалдан авсан</Text>
                <Image
                  style={styles.gif}
                  source={require("../../source/images/keys.gif")}
                />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.tanid}>Эрэлттэй үйлчилгээ</Text>
          <View style={styles.vw16}>
            <Text style={styles.ntxt}>Нийгмийн хамгаалал</Text>
            <Text style={styles.nn}>
              Дээд боловсролын сургалтын байгууллагын дипломын тодорхойлолт
            </Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.vw16}>
            <Text style={styles.ntxt}>КОВИД-19</Text>
            <Text style={styles.nn}>Вакцины гэрчилгээ</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.vw16}>
            <Text style={styles.ntxt}>Иргэний улсын бүртгэл</Text>
            <Text style={styles.nn}>
              Иргэний оршин суугаа газрын хаягийн бүртгэлийн лавлагаа
            </Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.vw16}>
            <Text style={styles.ntxt}>Иргэний улсын бүртгэл</Text>
            <Text style={styles.nn}>Иргэний үнэмлэхийн лавлагаа</Text>
            <View style={styles.vw7}>
              <View style={styles.vw8}>
                <Text style={styles.s}>Лавлагаа</Text>
              </View>
              <Text style={styles.nnn}>Төлбөргүй</Text>
              <AntDesign style={styles.sss} name="right" />
            </View>
          </View>
          <View style={styles.vw16}>
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
    height: 1700,
    borderRadius: 20,
    marginTop: 25,
  },
  vw2: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 340,
    height: 150,
    marginLeft: 16,
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
  tanid: {
    color: "#2818a0",
    fontWeight: "600",
    fontSize: 15,
    margin: 16,
  },
  vw6: {
    backgroundColor: "white",
    width: 310,
    height: 150,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 16,
  },
  d: {
    color: "#072461",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 30,
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
  ss: {
    color: "#072461",
    fontWeight: "500",
    marginLeft: 110,
    fontSize: 13,
  },
  sss: {
    color: "#072461",
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 13,
  },
  scll: {
    height: 170,
    flexDirection: "row",
  },
  vw9: {
    flexDirection: "row",
    alignItems: "center",
  },
  bugd: {
    color: "#708aa2",
    marginLeft: 60,
  },
  icon: {
    color: "#708aa2",
    fontSize: 15,
    marginLeft: 7,
  },
  scrolll: {
    height: 250,
    flexDirection: "row",
    marginTop: 12,
  },
  vw10: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#ffd966",
    alignItems: "center",
    marginLeft: 16,
  },
  b: {
    color: "white",
    fontWeight: "700",
    marginTop: 15,
    fontSize: 12,
  },
  gif: {
    width: 130,
    height: 130,
    borderRadius: 30,
    marginTop: 45,
  },
  vw11: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#a64da2",
    alignItems: "center",
    marginLeft: 8,
  },
  vw12: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#f44336",
    alignItems: "center",
    marginLeft: 8,
  },
  vw13: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#11138d",
    alignItems: "center",
    marginLeft: 8,
  },
  vw14: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#69e831",
    alignItems: "center",
    marginLeft: 8,
  },
  vw15: {
    width: 150,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#f36ae1",
    alignItems: "center",
    marginLeft: 8,
  },
  vw16: {
    backgroundColor: "white",
    width: "100%",
    height: 150,
    marginTop: 10,
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
});
