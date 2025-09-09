import { TextInput } from "react-native";

const FormTextInput = ({placeholder, setState, state, secureTextEntry=false}) => {

  return (
  <TextInput
    style={{ height: 44, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        placeholder={placeholder}
        onChangeText={text => {
          setState(text);
        }}
        value={state}
        secureTextEntry = {secureTextEntry}
        keyboardType="email-address"
  />
    );
}

export default FormTextInput;