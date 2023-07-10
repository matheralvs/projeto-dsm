import { Input as NativeBaseInput, IInputProps } from 'native-base'

type InputProps = IInputProps

export function Input({ ...props }: InputProps) {
  return (
    <NativeBaseInput
      bg="gray.50"
      color="gray.800"
      p={4}
      flex={1}
      rounded="lg"
      shadow={5}
      borderWidth={1}
      fontSize="md"
      _focus={{
        bg: 'gray.50',
        borderWidth: 1,
        borderColor: 'orange.400',
      }}
      {...props}
    />
  )
}
