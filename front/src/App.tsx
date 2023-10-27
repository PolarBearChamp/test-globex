import { List } from './components/List/List.tsx'
import { FullData } from './types'
import { Search } from './components/Search/Search.tsx'
import { useCallback, useEffect, useState } from 'react'
import { fetchData } from './services/fetchData.ts'

const App = () => {
  const [searchResults, setSearchResults] = useState<
    FullData[]
  >([])

  const handleSearch = useCallback(
    async (searchText: string) => {
      try {
        const data = await fetchData(searchText)
        setSearchResults(data)
      } catch (error) {
        console.error(
          'Ошибка при выполнении запроса:',
          error
        )
      }
    },
    []
  )

  useEffect(() => {
    handleSearch('')
  }, [])

  return (
    <div className={'content-page'}>
      <Search onSearch={handleSearch} />
      <List data={searchResults} />
    </div>
  )
}

export default App
