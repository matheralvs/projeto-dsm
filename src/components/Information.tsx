import { Box, HStack, Text } from 'native-base'

export function Information() {
  return (
    <HStack justifyContent="center" alignItems="center" space={4}>
      <Text fontSize="md" fontFamily="heading" color="orange.400">
        Livros encontrados:
      </Text>
      <Box bg="orange.400" px={2.5} py={0.5} rounded="full">
        <Text fontSize="sm" fontFamily="heading" color="gray.50">
          4
        </Text>
      </Box>
    </HStack>
  )
}
