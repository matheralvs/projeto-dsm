import { Stack } from 'native-base'

import { Header, Search } from '@components'
import { CardsList } from '@components/CardsList'

export default function Home() {
  return (
    <Stack>
      <Header.Root>
        <Header.Logo />
        <Search />
      </Header.Root>

      <CardsList />
    </Stack>
  )
}
