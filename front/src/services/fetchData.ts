const apiUrl = 'http://localhost:3000'

export const fetchData = async (searchText: string) => {
  try {
    let url = apiUrl

    if (searchText) {
      url += `?term=${searchText}`
    }

    const response = await fetch(url)
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Ошибка при выполнении запроса')
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    throw error
  }
}
