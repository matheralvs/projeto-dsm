import { Stack, FlatList } from 'native-base'

import { Card, Information, Empty, Loading } from '@components'

import { useAppSelector } from '@store/hooks'

import { useGetNoticiesByNameQuery } from '@services/http'
import { Hits } from '@services/http/types'

const emptyArray: Hits[] = []

export function CardsList() {
  const searchValue = useAppSelector(
    ({ searchSlice: { searchValue } }) => searchValue,
  )

  const skip = useAppSelector(({ searchSlice: { skip } }) => skip)

  const { noticies, isFetching, isLoading } = useGetNoticiesByNameQuery(
    searchValue,
    {
      selectFromResult: ({ data, isLoading, isFetching }) => ({
        noticies: data?.hits ?? emptyArray,
        isLoading,
        isFetching,
      }),
      skip,
    },
  )

  const noticiesArrayLength = noticies?.length

  return (
    <Stack mt={12} space={4}>
      {noticiesArrayLength !== 0 && (
        <Information numberOfNoticies={noticiesArrayLength} />
      )}
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <FlatList
          data={noticies}
          renderItem={({ item }) => (
            <Card.Root>
              <Card.Content title={item.title} />
              <Card.Footer noticeAuthor={item.author} noticeURL={item.url} />
            </Card.Root>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 550,
            paddingX: 4,
          }}
          ListEmptyComponent={() => <Empty />}
        />
      )}
    </Stack>
  )
}
