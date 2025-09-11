import { Tabs, Stack, router, Slot } from "expo-router";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

const Layout = () => {
  const [userID, setUserID] = useState( null )
  const [userToken, setUserToken] = useState( null )
  const [username, setUsername] = useState(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Récupérer les données du store au montage
  useEffect( () => {
    const getStoreData = async() => {  
      try {
        const userIDStore = await AsyncStorage.getItem("userID");
        const userTokenStore = await AsyncStorage.getItem("userToken");
        userIDStore && setUserID(userIDStore)
        userTokenStore && setUserToken(userTokenStore)
      } catch (error) {
        console.log('erreur récupération store', error);
      }
      finally {
        setIsInitialized(true)
      }
    }
    getStoreData();
  },[])

  // Sauvegarder les données dans le store
  const saveAsyncStorage = async(userID, userToken) => {
    await AsyncStorage.setItem("userID", userID);
    await AsyncStorage.setItem("userToken", userToken);
  }

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
    saveAsyncStorage("","")
    router.replace('auth/login')
  }

  useEffect(() => {
    if(isInitialized) {
      if(userID && userToken) {
        saveAsyncStorage(userID, userToken)
        router.replace('main/profile')
      } else {
        router.replace('auth/login')
      }
    }
  }, [userID, userToken])



  return (
    <AuthContext.Provider value={{userID, userToken, login, logout, username}}>
      <Slot />
        {/* <Stack 
          screenOptions={{
                headerShown: false,
                headerBackTitle: "Retour"
          }}
        /> */}
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
