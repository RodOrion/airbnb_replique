import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useContext } from "react";
import { AuthContext } from "../_layout";
import colors from "../../assets/colors.json";

const Profile = () => {
  const { username, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{ color: "#333" }}>Profile : {username}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? colors.button.primaryPressed
                  : colors.button.primary,
              },
            ]}
            onPress={logout}
          >
            <Text style={styles.buttonText}>Logout</Text>
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
    flex: 1,
    padding: 20,
    backgroundColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
