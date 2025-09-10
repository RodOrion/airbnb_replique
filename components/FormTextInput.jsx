import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

const FormTextInput = ({placeholder, setState, state, secureTextEntry=false, keyboardType="default", multiline=false, style}) => {
  const [secureText, setSecureText] = useState(secureTextEntry)
  const handleChangeSecure = (setState) => {
    setState(prev => !prev)
  }

  return (
    <View style={{position:'relative'}}>
      <TextInput
        style={style}
            placeholder={placeholder}
            onChangeText={text => {
              setState(text);
            }}
            value={state}
            secureTextEntry = {secureText}
            keyboardType={keyboardType}
            multiline={multiline}
            autoCapitalize="none"
      />
      {secureTextEntry && 
      <TouchableOpacity  
        style={styles.eye}
        onPress={() => {
          handleChangeSecure(setSecureText)
        }}
      >
        <AntDesign name="eyeo" size={20} color="black" />
      </TouchableOpacity >
      }
    </View>
    );
}

const styles = StyleSheet.create({
  eye : {
    position:'absolute',
    right:0,
    top:12,
  }
})

export default FormTextInput;