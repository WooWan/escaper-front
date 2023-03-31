import Link from 'next/link'
import Image from 'next/image'
import { ThemeDetail } from '@/types/theme'
import { Rating } from '@/components/ui/rating/Rating'

function ThemeBox(theme: ThemeDetail) {
  return (
    <div className="flex-shrink-0 grow-0 basis-[20%]">
      <Link key={theme.id} href={`/theme/${theme.id}`}>
        <div className="relative aspect-square">
          <Image src={theme.imageURL} fill alt="logo" />
        </div>
        <div className="flex flex-col px-2">
          <h4>{theme.name}</h4>
          <div className="relative flex h-4 w-4 items-center">
            <div className="flex items-baseline gap-2">
              <Rating initialValue={theme.rating} readonly size={16} SVGstyle={{ display: 'inline-flex' }} />
              <span className="text-b1">{theme.rating}</span>
            </div>
          </div>
          <div className="text-b2 text-gray-400">{theme.cafe.name}</div>
        </div>
      </Link>
    </div>
  )
}

export default ThemeBox
