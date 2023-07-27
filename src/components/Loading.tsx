import { Spinner, Stack } from 'native-base'

export function Loading() {
  return (
    <Stack mt={32}>
      <Spinner size={48} color="orange.400" />
    </Stack>
  )
}
