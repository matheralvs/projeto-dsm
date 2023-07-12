import Feather from '@expo/vector-icons/Feather'

import { HStack, Divider, Icon, Link, Text } from 'native-base'

export function CardFooter() {
  return (
    <HStack
      bg="orange.100"
      px={5}
      py={3}
      justifyContent="center"
      space={4}
      divider={<Divider orientation="vertical" bg="orange.300" />}
    >
      <HStack space={2} alignItems="center">
        <Icon as={Feather} name="user" size="md" color="orange.400" />
        <Text fontSize="sm" textTransform="capitalize" color="orange.400">
          dwwoelfel
        </Text>
      </HStack>

      <HStack space={2} alignItems="center">
        <Icon as={Feather} name="external-link" size="md" color="orange.400" />
        <Link
          href="https://code.facebook.com/posts/300798627056246"
          _text={{
            color: 'orange.400',
          }}
        >
          Acesse já
        </Link>
      </HStack>
    </HStack>
  )
}
