import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useContext } from "react";
import { AuthContext } from "../_layout";

const Profile = () => {
  const {username, logout} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{color:'#333'}}>Profile : {username}</Text>
      </View>
      <TouchableOpacity
        onPress={logout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
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

export default Profile;