import { ScrollView, Stack } from 'native-base'

import { Information, Card } from '@components'

export default function Home() {
  return (
    <Stack px={4} space={4}>
      <Information />

      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Card.Root>
          <Card.Content />
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Content />
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Content />
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Content />
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Content />
          <Card.Footer />
        </Card.Root>
      </ScrollView>
    </Stack>
  )
}
