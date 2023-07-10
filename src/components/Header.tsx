import { Image, Stack } from 'native-base'

import { screenWidth } from '@constants/screenDimensions'

import bgHero from '@assets/bgHero.png'
import DsmLogo from '@assets/dsmLogo.svg'

import { SearchField } from './SearchField'

export function Header() {
  return (
    <Stack
      width={screenWidth}
      height={200}
      alignItems="center"
      justifyContent="center"
      borderBottomWidth={4}
      borderBottomColor="orange.400"
    >
      <Image
        source={bgHero}
        flex={1}
        width={screenWidth}
        resizeMode="cover"
        alt="DSM Logo"
      />
      <DsmLogo
        style={{
          position: 'absolute',
        }}
      />
      <SearchField />
    </Stack>
  )
}
