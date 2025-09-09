import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
        //   headerShown: false,
          title: "Home",
          //   tabBarIcon: () => (
          //     // <FontAwesome6 name="house-chimney" size={24} color="red" />
          //     <AntDesign name="downcircle" size={24} color="black" />
          //   ),
        }}
      />
      <Tabs.Screen 
        name="auth"
        options={ {
            title:"Connexion"
        }}
      />
    </Tabs>
  );
}
export default Layout;
