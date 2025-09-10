import { Tabs } from "expo-router";

const MainLayout = () => {
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#fff", // Couleur de l'onglet actif
      tabBarInactiveTintColor: "#ccc", // Couleur de l'onglet inactif
      tabBarStyle: {
        backgroundColor: "#222", // Couleur de fond du footer
        borderTopColor: "#ccc", // Couleur de la bordure du haut
        borderTopWidth: 3,
      },
    }}
  >
    <Tabs.Screen
      name="/home"
      options={{
        //   headerShown: false,
        title: "Home",
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#eee" />,
      }}
    />
    <Tabs.Screen
      name="map"
      options={{
        //   headerShown: false,
        title: "Home",
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#eee" />,
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        //   headerShown: false,
        title: "Profile",
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#eee" />,
      }}
    />
  </Tabs>;
};
export default MainLayout;
