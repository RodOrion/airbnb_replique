import { StyleSheet, Image } from 'react-native';
import logo from "../assets/img/airbnb.svg"

const Logo = () => {
  return <Image source={logo} resizeMode='contain' />;
}

export default Logo;