import { NativeBaseProvider, Box, Text } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text fontSize={32}>Hello world!</Text>
      </Box>
    </NativeBaseProvider>
  )
}
