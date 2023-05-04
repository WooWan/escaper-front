import Link from 'next/link'
import Image from 'next/image'
import { ThemeDetail } from '@/src/types/theme'
import { Rating } from '@/src/components/ui/rating/Rating'

function ThemeBox(theme: ThemeDetail) {
  return (
    <div>
      <Link key={theme.id} href={`/theme/${theme.id}`}>
        <div className="relative aspect-square">
          <Image src={theme.imageURL} fill alt="logo" />
        </div>
        <div className="flex flex-col px-1">
          <span>{theme.name}</span>
          <div className="relative flex h-4 w-0 items-center">
            <div className="flex items-baseline gap-y-2">
              <Rating initialValue={theme.rating} readonly size={16} SVGstyle={{ display: 'inline-flex' }} />
              <span className="text-b1">{theme.rating}</span>
            </div>
          </div>
          <div className="text-b2 text-gray-400">{theme.cafe?.name}</div>
        </div>
      </Link>
    </div>
  )
}

export default ThemeBox
