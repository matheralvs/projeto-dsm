import { Alert, Keyboard } from 'react-native'

import Feather from '@expo/vector-icons/Feather'

import { HStack, Icon, Button } from 'native-base'

import { screenWidth } from '@constants/screenDimensions'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  setSearchInitialValue,
  setSearchValue,
  setSkip,
} from '@store/slices/searchSlice'

import { Input } from './Input'

type SearchProps = {
  isLoading?: boolean
  isFetching?: boolean
}

export function Search({ isLoading = false, isFetching = false }: SearchProps) {
  const searchInitialValue = useAppSelector(
    ({ searchSlice }) => searchSlice.searchInitialValue,
  )

  const dispatch = useAppDispatch()

  function handleInputValue(value: string) {
    const searchInitialValue = value.trim()

    dispatch(setSearchInitialValue(searchInitialValue))
  }

  function handleClickButton() {
    if (!searchInitialValue) {
      return Alert.alert(
        'Ops...',
        'Preencha o campo de pesquisa para procurar por notícias.',
      )
    }

    dispatch(setSearchValue(searchInitialValue))
    dispatch(setSkip(false))
    Keyboard.dismiss()
  }

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
      <Input
        placeholder="Pesquise por uma notícia..."
        onChangeText={handleInputValue}
      />
      <Button
        bg="orange.400"
        w={16}
        h="full"
        rounded="lg"
        shadow={5}
        isDisabled={isLoading || isFetching}
        isLoading={isLoading || isFetching}
        _pressed={{
          bg: 'orange.400',
          opacity: 95,
        }}
        _loading={{
          opacity: 100,
        }}
        _disabled={{
          opacity: 100,
        }}
        onPress={handleClickButton}
      >
        <Icon as={Feather} name="search" size="lg" color="gray.50" />
      </Button>
    </HStack>
  )
}
