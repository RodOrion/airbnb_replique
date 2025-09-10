import { Stack } from 'expo-router';

const HomeLayout = () => {
    return (
    <Stack 
        screenOptions={{
            headerShown: false,
            headerBackTitle: "Retour"
        }}
    >
      <Stack.Screen 
        name="rooms" 
        options={{ 
          title: "Rooms",
          //headerShown: false
        }} 
      />
      <Stack.Screen 
        name="room" 
        options={{ 
          title: "Rooms",
          headerShown: true 
        }} 
      />
    </Stack>)
}
export default HomeLayout