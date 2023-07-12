import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
} from '@expo-google-fonts/inter'

import { Box, NativeBaseProvider } from 'native-base'

import { Header, Empty } from '@components'

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
      <Header.Root>
        <Header.Logo />
        <Header.Search />
      </Header.Root>
      <Box flex={1} mt={12}>
        {/* <Empty /> */}
        <Slot />
      </Box>
    </NativeBaseProvider>
  )
}
