import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

const images = [
  require("@/assets/images/XL1.png"),
  require("@/assets/images/XL2.jpg"),
  require("@/assets/images/XL3.png"),
  require("@/assets/images/XL4.png"),
];

const handlePress = () => {
  alert("Button Pressed!");
};

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <FontAwesome name="user" />
          </View>
          <Text style={styles.username}>6287737806282</Text>
          <TouchableOpacity style={styles.iconPlus}>
            <FontAwesome name="plus" size={10} color="#25292e" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <FontAwesome name="bell" size={15} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageContainer}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View style={styles.textbebas}>
          <Text style={styles.textBebasPuas}>BEBAS</Text>
          <Text style={styles.textBebasPuas}>PUAS</Text>
        </View>
        <Ionicons name="gift-outline" style={styles.iconButton} size={14} />
        <Ionicons name="barcode-outline" style={styles.iconButton} size={14} />
        <Ionicons name="people-outline" style={styles.iconButton} size={14} />
        <Ionicons name="grid-outline" style={styles.iconButton} size={14} />
      </TouchableOpacity>

      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Pulsa</Text>
          {/* <FontAwesome name="plus" size={10} color="#25292e" /> */}
          <Text style={styles.accountLabe2}>PulsaLater</Text>
        </View>
        <View style={styles.balanceSection}>
          <View>
            <Text style={styles.balanceLabel}>RP13.110</Text>
            <Text style={styles.balanceValue}>Sampai 13 Desember 2024</Text>
          </View>
          <View>
            <Text style={styles.balanceLabe2}>Isi Ulang</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addPulsaButton}>
          <Text style={styles.addPulsaText}>Lihat Fitur Pulsa Saya</Text>
          <FontAwesome name="arrow-right" />
        </TouchableOpacity>
      </View>

      <View style={styles.packageOffer}>
        <Text style={styles.offerTitle}></Text>
        <View style={styles.packageCard}>
          <View style={styles.Icon}>
            <View style={styles.IconGlobe}>
              <FontAwesome name="globe" />
            </View>
            <View style={styles.IconPhone}>
              <FontAwesome name="phone" />
            </View>
            <View style={styles.IconEnvelope}>
              <FontAwesome name="envelope" />
            </View>
          </View>
          <View style={styles.packageData}>
            <Text style={styles.paketData}>23.01 GB</Text>
            <Text style={styles.peketTelpon}>20 Menit</Text>
            <Text style={styles.paketSms}>-</Text>
          </View>
          <TouchableOpacity style={styles.LihatPaket}>
            <Text style={styles.LihatPaketText}>Lihat Paket Saya</Text>
            <FontAwesome name="arrow-right" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imageWrapper: {
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  ScrollView: {
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  textBebasPuas: {
    fontSize: 10,
    color: "#00008b",
    fontWeight: "bold",
  },
  textbebas: {
    borderColor: "#fff",
    borderWidth: 12,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  iconButton: {
    borderColor: "#fff",
    borderWidth: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#0000ff",
  },
  header: {
    backgroundColor: "#0000ff",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  username: {
    fontWeight: "bold",
    color: "#fff",
  },
  notificationIcon: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  accountCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  accountInfo: {
    flexDirection: "row",
    backgroundColor: "#a9a9a9",
    padding: 6,
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 8,
  },
  accountLabel: {
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#00008b",
    color: "#fff",
    padding: 10,
    borderRadius: 15,
    fontSize: 15,
  },
  accountLabe2: {
    padding: 10,
    // backgroundColor:'#eee',
    fontWeight: "bold",
    color: "#00008b",
    fontSize: 15,
  },
  balanceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  balanceValue: {
    color: "#a9a9a9",
  },
  balanceLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  balanceLabe2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00008b",
    borderColor: "#00008b",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  addPulsaButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addPulsaText: {
    color: "#00008b",
    fontWeight: "bold",
  },
  quickActions: {
    paddingHorizontal: 16,
  },
  actionButton: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  packageOffer: {
    paddingHorizontal: 16,
  },
  offerTitle: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  packageCard: {
    // flexDirection:'row',
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  packageData: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    flexDirection: "row",
    padding: 5,
    borderColor: "#000",
    justifyContent: "space-between",
  },
  LihatPaket: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
    borderWidth: 1,
  },
  LihatPaketText: {
    color: "#00008b",
    fontWeight: "bold",
  },

  Icon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  iconPlus: {
    position: "relative",
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "#fff",
    padding: 4,
    borderRadius: 10,
  },
  IconGlobe: {
    alignContent: "center",
    marginLeft: 5,
  },
  IconPhone: {
    marginLeft: 5,
  },
  IconEnvelope: {
    marginRight: 5,
  },
  paketData: {
    fontWeight: "bold",
  },
  peketTelpon: {
    fontWeight: "bold",
  },
  paketSms: {
    fontWeight: "bold",
  },
});
