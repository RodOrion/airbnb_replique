import axios from "axios";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import FormTextInput from "../../components/FormTextInput";
import Logo from "../../components/Logo";
import { useState } from "react";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TitleForm from "../../components/TitleForm";
import colors from "../../assets/colors.json"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("veuillez remplir les champs");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passes ne correspondent pas");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up`,
        {
          email,
          username,
          description,
          password,
        }
      );
      console.log(response.data);
      alert("vous êtes inscris");
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
        extraHeight={100} // Hauteur supplémentaire
        extraScrollHeight={100}
        keyboardOpeningTime={250}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Logo />
          <TitleForm styleTitle={styles.title} titleForm="Inscription" />
        </View>
        <View style={{ gap: 25 }}>
          <FormTextInput
            state={email}
            setState={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputForm}
          />
          <FormTextInput
            state={username}
            setState={setUsername}
            placeholder="username"
            style={styles.inputForm}
          />
          <FormTextInput
            state={description}
            setState={setDescription}
            placeholder="Description.."
            multiline={true}
            style={styles.textArea}
          />
          <FormTextInput
            state={password}
            setState={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputForm}
          />
          <FormTextInput
            state={confirmPassword}
            setState={setConfirmPassword}
            placeholder="Confirm password"
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
              {isLoading ? "inscription..." : "S'inscrire'"}
            </Text>
          </TouchableOpacity>
          <View>
            <Text>
              Vous avez déjà un compte ?{" "}
              <Link href="auth/login">Connexion</Link>
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
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "flex-start",
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
    width: "80%",
    marginTop: 30,
    marginBottom: 15,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  // buttonOpacity: {
  //   width: "100%",
  //   padding: 10,
  //   backgroundColor: "blue",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 5,
  //   gap: 10,
  //   marginTop: 10,
  // },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
  },
  textArea: {
    textAlignVertical:'top',
    borderColor: colors.primary.coral,
    borderWidth: 1,
    borderStyle: "solid",
    minHeight: 80,
    marginTop: 10,
  },
  inputForm: {
    borderBottomColor: colors.primary.coral,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});

export default Signup;
