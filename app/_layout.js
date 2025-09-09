import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
        //   headerShown: false,
          title: "Home",
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen 
        name="auth"
        options={{
            headerShown: false,
            title:"Connexion",
            tabBarIcon: () => {
                <AntDesign name="enter" size={24} color="black" />
            },
        }}
      />
    </Tabs>
  );
}
export default Layout;
