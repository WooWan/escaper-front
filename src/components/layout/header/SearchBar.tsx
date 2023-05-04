import { useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import useDebounce from '@/utils/useDebounce'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const debouncedKeyword = useDebounce({ value: keyword, delay: 250 })
  const [originalPage, setOriginalPage] = useState('')

  useEffect(() => {
    setOriginalPage(router.pathname)
  }, [])
  useEffect(() => {
    if (!debouncedKeyword) {
      if (originalPage) {
        router.push(originalPage)
      }
    } else {
      router.push('/search?q=' + debouncedKeyword)
    }
  }, [debouncedKeyword])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

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
