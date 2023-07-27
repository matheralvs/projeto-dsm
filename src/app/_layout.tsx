import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider as ReduxProvider } from 'react-redux'

import {
  useFonts,
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
} from '@expo-google-fonts/inter'

import { NativeBaseProvider } from 'native-base'

import { store } from '@store'

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
      <ReduxProvider store={store}>
        <StatusBar style="light" translucent />
        <Slot />
      </ReduxProvider>
    </NativeBaseProvider>
  )
}
