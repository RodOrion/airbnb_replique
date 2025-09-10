import { Pressable, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import Constants from "expo-constants";

const Room = () => {
  const {id} = useLocalSearchParams()

  // useEffect(id) + fetch data room : id

  return (
    <SafeAreaView style={[styles.safeArea, styles.container]}>
      <Text style={{color:'#333'}}>Room {id}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1, // Important !
    justifyContent:'space-between',
  },
  container: {
    flex:1,
    paddingHorizontal: 40,
    paddingVertical:20,
    backgroundColor: '#ccc',
  },
});

export default Room;