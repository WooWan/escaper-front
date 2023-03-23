import { useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchKeyword } from '@/store/slices/SearchKeyword'
import useDebounce from '@/utils/useDebounce'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  const debouncedKeyword = useDebounce({ value: keyword, delay: 250 })

  useEffect(() => {
    dispatch(setSearchKeyword(debouncedKeyword))
  }, [debouncedKeyword])

  return (
    <div className="flex items-center gap-x-2 rounded-md border-[1px] border-gray-300 bg-white py-1 px-4">
      <Search className="h-4 w-4 cursor-pointer" />
      <input
        className="focus:outline-none"
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search..."
      />
      <X className="h-5 w-5 cursor-pointer" onClick={() => setKeyword('')} />
    </div>
  )
}

export default SearchBar
