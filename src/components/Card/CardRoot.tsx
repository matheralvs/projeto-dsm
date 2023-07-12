import { ReactNode } from 'react'

import { VStack } from 'native-base'

type CardRootProps = {
  children: ReactNode
}
export function CardRoot({ children }: CardRootProps) {
  return (
    <VStack overflow="hidden" rounded="lg" mb={4}>
      {children}
    </VStack>
  )
}
