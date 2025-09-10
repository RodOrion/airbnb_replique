import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";

const Rooms = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.container]}>
      <Text style={{color:'#333'}}>Rooms</Text>
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
    paddingHorizontal: 40,
    paddingVertical:20,
    backgroundColor: '#222',
  },
});

export default Rooms;