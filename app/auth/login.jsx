import axios from "axios";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ActivityIndicator
} from "react-native";
/** safe area **/
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
/** COntext **/
import { useContext, useState } from "react";
import { AuthContext } from "../_layout";
/** components */
import FormTextInput from "../../components/FormTextInput";
import Logo from "../../components/Logo";
import TitleForm from "../../components/TitleForm";
/** router */
import { Link } from "expo-router";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../assets/colors.json";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("veuillez remplir les champs");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      login(response.data.id, response.data.token, response.data.username);
      alert("vous êtes connecté");
      // navigation vers une autre page
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.error ||
          "Une erreur est survenue lors de la connexion"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, styles.container]}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        keyboardOpeningTime={250}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Logo />
          <TitleForm styleTitle={styles.title} titleForm="Connexion" />
        </View>
        <View style={{ gap: 30 }}>
          <FormTextInput
            state={email}
            setState={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputForm}
          />
          <FormTextInput
            state={password}
            setState={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputForm}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.button, isLoading && styles.buttonDisabled]}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? <ActivityIndicator /> : "Se connecter"}
            </Text>
          </TouchableOpacity>
          <View style={{ paddingBottom: insets.bottom }}>
            <Text>
              Vous n'avez pas de compte ?{" "}
              <Link href="auth/signup">Inscription</Link>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 10,
  },
  button: {
    padding: 20,
    borderRadius: 20,
    borderColor: colors.primary.coral,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    marginVertical: 10,
    width: "80%",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
  },
  inputForm: {
    borderBottomColor: colors.primary.coral,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});

export default Login;
