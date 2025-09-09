import axios from "axios"
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";
import FormTextInput from "../../components/FormTextInput";
import Logo from "../../components/Logo";
import { useState } from "react";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert('vous êtes connecté')
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
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Logo />
        <View style={{gap:30}}>
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
        <View style={{alignItems:'center'}}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity 
            onPress={handleSubmit}
            style={[styles.button, isLoading && styles.buttonDisabled]}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </Text>
          </TouchableOpacity>
          <View>
            <Text>Vous n'avez pas de compte ? <Link href="auth/signup">Inscription</Link></Text>
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
  container: {
    flex:1,
    paddingHorizontal: 40,
    paddingVertical:20,
    justifyContent:'space-between',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: 20,
    borderRadius: 20,
    borderColor:'red',
    borderWidth: 1,
    borderStyle:'solid',
    alignItems: 'center',
    marginVertical: 10,
    width:'80%',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonOpacity : {
    width:'100%',
    padding:10,
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    gap:10,
    marginTop:10
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  inputForm : {
    borderBottomColor:'red',
    borderBottomWidth:1,
    borderStyle:'solid'
  },
});

export default Login;
