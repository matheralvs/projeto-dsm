import Feather from '@expo/vector-icons/Feather'

import { Text, HStack, Icon } from 'native-base'

export function CardContent() {
  return (
    <HStack bg="orange.400" p={8} justifyContent="center">
      <HStack space={4} alignItems="center">
        <Icon as={Feather} name="book" size="5xl" color="gray.50" />
        <Text
          fontSize="sm"
          lineHeight="md"
          maxWidth="8xl"
          noOfLines={2}
          color="gray.50"
        >
          Relicensing React, Jest, Flow, and Immutable.js
        </Text>
      </HStack>
    </HStack>
  )
}
