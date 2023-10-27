import cls from './Search.module.scss'
import {
  ChangeEvent,
  FC,
  useCallback,
  useState
} from 'react'
import { getIcons } from '../../utils/getIcon.ts'
import { debounce } from '../../utils/debounce.ts'

interface IProps {
  onSearch: (searchText: string) => void
}
export const Search: FC<IProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<string>('')

  const debouncedSearch = useCallback(
    debounce(onSearch, 500),
    []
  )

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const searchText = e.target.value
    setSearchInput(searchText)
    debouncedSearch(searchText)
  }
  return (
    <div className={cls.wrapper}>
      <input
        className={cls.Search}
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
      {<getIcons.icSearch className={cls.icon} />}
    </div>
  )
}
