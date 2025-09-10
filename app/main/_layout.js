import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const MainLayout = () => {

  return (
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
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#eee" />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: () => <Feather name="map" size={24} color="#eee" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: () => <Ionicons name="person" size={24} color="#eee" />,
        }}
      />
    </Tabs>
  )
};
export default MainLayout;
