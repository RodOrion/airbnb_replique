import { Tabs, Stack, router } from "expo-router";
import { createContext, useState } from "react";
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

export const AuthContext = createContext()

const Layout = () => {
  const [userID, setUserID] = useState(null)
  const [userToken, setUserToken] = useState(null)
  const [username, setUsername] = useState(null)

  const login = (user_id, user_token, user_name) => {
    setUserID(user_id)
    setUserToken(user_token)
    setUsername(user_name)
    router.replace('main/profile')
  }

  const logout = () => {
    setUserID(null)
    setUserToken(null)
    setUsername(null)
    router.replace('auth/login')
  }

  return (
    <AuthContext.Provider value={{userID, setUserID, userToken, setUserToken, login, logout, setUsername, username}}>
        <Stack 
          screenOptions={{
                headerShown: false,
                headerBackTitle: "Retour"
          }}
        />
    </AuthContext.Provider>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: '#fff', // Couleur de l'onglet actif
    //     tabBarInactiveTintColor: '#ccc', // Couleur de l'onglet inactif
    //     tabBarStyle: {
    //       backgroundColor: '#222', // Couleur de fond du footer
    //       borderTopColor: '#ccc', // Couleur de la bordure du haut
    //       borderTopWidth: 3,
    //     },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //     //   headerShown: false,
    //       title: "Home",
    //         tabBarIcon: () => (
    //           <FontAwesome5 name="home" size={24} color="#eee" />
    //         ),
    //     }}
    //   />
    //   <Tabs.Screen 
    //     name="auth"
    //     options={{
    //         headerShown: false,
    //         title:"Connexion",
    //         tabBarIcon: () => (
    //           <FontAwesome name="sign-in" size={24} color="#eee" />
    //         )
    //       }}
    //   />
    // </Tabs>
  );
}
export default Layout;
