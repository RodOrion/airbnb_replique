import { Image } from "expo-image";
import logo from "../assets/img/airbnb.svg";

const Logo = () => {
  return (
      <Image
        style={{ height: 80, width: "100%", marginBottom: 20 }}
        source={logo}
        contentFit="contain"
      />
  );
};

export default Logo;
