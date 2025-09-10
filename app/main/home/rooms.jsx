import { Pressable, StyleSheet, Text, View, Image, SafeAreaView, Platform } from "react-native";
import { Stack, router } from "expo-router";
import Constants from "expo-constants";
import colors from "../../../assets/colors.json";
import gite_01 from "../../../assets/img/gite_01.jpg"

const Rooms = () => {

  const handlePressRoom = (roomID) => {
    router.push({
      pathname:'main/home/room',
      params: {id:roomID}
    })
  }

  return (
    <SafeAreaView style={[styles.safeArea, styles.container]}>
      <Text style={{color:'#333'}}>Rooms</Text>
      <View style={styles.section}>
        <View style={styles.article}>
          <Text>Room 01</Text>
          <Image source={gite_01} style={styles.imgRoom} />
          <Pressable
            onPress={()=>handlePressRoom(1)}
          >
            <Text>See room</Text>
          </Pressable>
        </View>
        <View style={styles.article}>
          <Text>Room 02</Text>
          <Image source={gite_01} style={styles.imgRoom} />
          <Pressable
            onPress={()=>handlePressRoom(2)}
          >
            <Text>See room</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  container: {
    flex:1,
    paddingHorizontal: 20,
    paddingVertical:20,
    gap:10,
    backgroundColor: colors.background.primary,
  },
  section : {
    flexDirection:'row',
    alignItems:'flex-start',
    flex:1,
    gap:10,
    backgroundColor:colors.background.secondary,
    paddingVertical:10
  },
  article : {
    flex:1,
    padding:5,
    backgroundColor:colors.background.tertiary,
    justifyContent:'flex-start'
  },
  imgRoom : {
    height:100,
    resizeMode:'contain',
    width:'100%'
  },
});

export default Rooms;