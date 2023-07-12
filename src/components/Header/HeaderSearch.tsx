import Feather from '@expo/vector-icons/Feather'

import { HStack, Button, Icon } from 'native-base'

import { Input } from '@components'

import { screenWidth } from '@constants/screenDimensions'

export function HeaderSearch() {
  return (
    <HStack
      position="absolute"
      bottom={0}
      width={screenWidth}
      mb={-7}
      px={4}
      alignItems="center"
      space={2}
    >
      <Input placeholder="Pesquise por um livro..." />
      <Button
        bg="orange.400"
        h="full"
        px={5}
        rounded="lg"
        shadow={5}
        _pressed={{
          bg: 'orange.400',
          opacity: 95,
        }}
      >
        <Icon as={Feather} name="search" size="lg" color="gray.50" />
      </Button>
    </HStack>
  )
}
