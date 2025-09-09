import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack
        screenOptions={{
            headerShown: true,
            headerBackTitle: "Retour"
        }}
    >
      <Stack.Screen 
        name="signup" 
        options={{ 
          title: "Inscription",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          title: "Connexion",
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
export default AuthLayout 