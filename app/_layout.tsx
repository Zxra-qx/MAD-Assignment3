import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#181818',
          },
          headerTintColor: '#ffffff',
          contentStyle: {
            backgroundColor: '#121212',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name="employee"
          options={{ title: 'Employee Information' }}
        />

        <Stack.Screen
          name="signup"
          options={{ title: 'Sign Up' }}
        />

        <Stack.Screen
          name="signin"
          options={{ title: 'Sign In' }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}