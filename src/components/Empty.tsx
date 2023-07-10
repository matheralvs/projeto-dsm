import Feather from '@expo/vector-icons/Feather'
import { Icon, Text, VStack } from 'native-base'

export function Empty() {
  return (
    <VStack alignItems="center" px={5} py={12}>
      <Icon as={Feather} name="inbox" size="6xl" color="gray.500" />

      <VStack alignItems="center">
        <Text fontSize="md" fontFamily="heading" color="gray.500">
          Ops! Não temos nada por aqui.
        </Text>
        <Text fontSize="md" color="gray.500">
          Pesquise agora mesmo um livro e se divirta!
        </Text>
      </VStack>
    </VStack>
  )
}
