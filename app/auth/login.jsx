import { Button, StyleSheet, Text, View } from "react-native";
import FormTextInput from "../../components/FormTextInput";
import Logo from "../../components/Logo";
import { useState } from "react";

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
    <View>
      <Logo />
      <View style={styles.container}>
        <FormTextInput state={email} setState={setEmail} />
        <FormTextInput
          state={password}
          setState={setPassword}
          secureTextEntry={true}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Button
          onPress={handleSubmit}
          style={[styles.button, isLoading && styles.buttonDisabled]}
          disabled={isLoading}
          title={isLoading ? "Connexion..." : "Se connecter"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
});

export default Login;
