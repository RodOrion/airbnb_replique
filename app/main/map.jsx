import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";
const Map = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.container]}>
      <Text style={{color:'#333'}}>Map</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1, // Important !
    justifyContent:'space-between',
  },
  container: {
    flex:1,
    paddingHorizontal: 40,
    paddingVertical:20,
    backgroundColor: '#222',
  },
});

export default Map;
