import Feather from '@expo/vector-icons/Feather'

import { Text, HStack, Icon } from 'native-base'

type CardContentProps = {
  title: string
}

export function CardContent({ title }: CardContentProps) {
  return (
    <HStack bg="orange.400" py={8} px={16} justifyContent="flex-start">
      <HStack space={4} alignItems="center">
        <Icon as={Feather} name="book-open" size="5xl" color="gray.50" />
        <Text
          fontSize="sm"
          lineHeight="md"
          maxWidth="8xl"
          noOfLines={2}
          color="gray.50"
        >
          {title}
        </Text>
      </HStack>
    </HStack>
  )
}
