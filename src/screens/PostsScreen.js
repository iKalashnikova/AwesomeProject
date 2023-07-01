import Icon from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
// import { useSelector } from 'react-redux';

export const PostScreen = ({ route, navigation }) => {
  //   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (route.params && route.params.location) {
      setLocation(route.params.location);
    }
  }, [route.params]);
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Публікації</Text>

          <TouchableOpacity
          // onPress={handleLogout}
          >
            <Icon name="log-out-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.userContainer}>
          <Image style={styles.userImage}/>
          <View>
            <Text style={styles.userName}>Login</Text>
            <Text
              style={{
                fontSize: 11,
                lineHeight: 12.89,
                color: "#212121",
                fontFamily: "Roboto-Regular",
              }}
            >
              Email
            </Text>
          </View>
        </View>
        {/* <FlatList */}
          {/* // data={posts}
          // keyExtractor={(item, index) => index.toString()}
          // renderItem={({ item }) => ( */}
            <View>
              <Image
              //  source={{ uri: item.photo }} 
               style={styles.itemPhoto} />
              <Text style={styles.itemTitle}>Назва фото</Text>
              <View style={styles.description}>
                <View style={styles.comments}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Comments")
                    }
                  >
                    <Feather
                      name="message-circle"
                      size={24}
                      color={"#BDBDBD"}
                      style={{
                        marginRight: 9,
                      }}
                    />
                  </TouchableOpacity>
                  {/* <Text style={styles.commentsAmount}> */}
                    {/* {item.commentsQuantity ? item.commentsQuantity : "0"} */}
                  {/* </Text>{" "} */}
                </View>
                <View style={styles.likes}>
                  <TouchableOpacity>
                    <Feather
                      name="thumbs-up"
                      size={24}
                      color={"#BDBDBD"}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.commentsAmount}>0</Text>
                </View>
                <View style={styles.location}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Map", { location });
                    }}
                  >
                    <Feather
                      name="map-pin"
                      size={24}
                      color="#BDBDBD"
                      style={{ marginRight: 8 }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...styles.commentsAmount,
                      textDecorationLine: "underline",
                    }}
                  >
                   Місцевість
                  </Text>
                </View>
              </View>
            </View>
          {/* )} */}
        {/* /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 35,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",

    // flexDirection: 'column',
    // paddingHorizontal: 16,
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderBottomWidth: 1,
    width: "100%",
    borderBottomColor: "#ccc",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  itemPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    marginBottom: 11,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  commentsAmount: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  description: {
    paddingBottom: 34,
    flexDirection: "row",
  },
  comments: {
    marginRight: 31,
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    marginRight: 31,
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  // footer: {
  //   // flex: 1,
  //   flexDirection: "row",
  //   // justifyContent: "space-between"
  //   height: 60,
  //   borderTopWidth: 1,
  //   borderTopColor: "#ccc",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginBottom: 30,
  //   width: "100%",
  // },
});
