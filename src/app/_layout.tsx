import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
} from '@expo-google-fonts/inter'
import { Box, NativeBaseProvider } from 'native-base'

import { Empty } from '@components/Empty'
import { Header } from '@components/Header'

import { defaultTheme } from '@styles/theme'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter400Regular,
    Inter700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar style="light" translucent />
      <Header />
      <Box flex={1} mt={12}>
        {/* <Empty /> */}
        <Slot />
      </Box>
    </NativeBaseProvider>
  )
}
