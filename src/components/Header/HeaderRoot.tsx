import { ReactNode } from 'react'

import { Image, Stack } from 'native-base'

import { screenWidth } from '@constants/screenDimensions'

import bgHero from '@assets/bgHero.png'

type HeaderProps = {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderProps) {
  return (
    <Stack
      width={screenWidth}
      height={200}
      alignItems="center"
      justifyContent="center"
      borderBottomWidth={4}
      borderBottomColor="orange.400"
      position="relative"
    >
      <Image
        source={bgHero}
        flex={1}
        width={screenWidth}
        resizeMode="cover"
        alt="DSM Logo"
      />
      {children}
    </Stack>
  )
}
