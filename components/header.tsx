import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between bg-white">
      <div className="m-auto flex w-content items-center justify-between py-4">
        <div className="cursor-pointer">
          <Link href={'/'}>
            <Image src="/images/logo.png" alt="Logo" width={127} height={40} />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex h-11">
            <input
              placeholder="Search in Lazada"
              className="h-full rounded-sm bg-light-gray2 py-3 px-5 text-sm text-gray focus:border-0 focus:outline-0"
              style={{ width: '688px' }}
            />
            <div className="flex h-full w-11 items-center justify-center rounded-sm bg-primary">
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </div>
          </div>
          <div className="ml-5">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-dark-blue"
            />
          </div>
        </div>
        <div>
          <Image src="/images/wallet.png" alt="Logo" width={188} height={45} />
        </div>
      </div>
    </header>
  )
}
