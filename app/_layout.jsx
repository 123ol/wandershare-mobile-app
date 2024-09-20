import React, { useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';

export default function Layout() {
  useEffect(() => {
    const handleSplashScreen = async () => {
      // Prevent splash screen from auto-hiding
      await SplashScreen.preventAutoHideAsync();
      // Delay hiding the splash screen
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay
      await SplashScreen.hideAsync();
    };

    handleSplashScreen();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
