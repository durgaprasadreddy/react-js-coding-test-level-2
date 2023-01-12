import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between bg-white">
      <div className="m-auto w-content items-center justify-between py-4 lg:flex">
        <div className="mb-3 flex items-center justify-between px-4 lg:mb-0 lg:px-0">
          <div className="cursor-pointer">
            <Link href={'/'}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={127}
                height={40}
              />
            </Link>
          </div>

          <div className="visible w-1/3 cursor-pointer lg:hidden">
            <Link href={'/dashboard'}>
              <Image
                src="/images/wallet.png"
                alt="Logo"
                width={188}
                height={45}
              />
            </Link>
          </div>
        </div>
        <div className="m-auto flex flex-1 items-center justify-center">
          <div className="flex h-11">
            <input
              placeholder="Search in Lazada"
              className="w-66 -ml-14 h-full rounded-sm bg-light-gray2 py-3 px-5 text-sm text-gray focus:border-0 focus:outline-0 sm:w-96 md:w-128 lg:w-160"
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
        <Link href={'/dashboard'}>
          <div className="hidden cursor-pointer lg:block">
            <Image
              src="/images/wallet.png"
              alt="Logo"
              width={188}
              height={45}
            />
          </div>
        </Link>
      </div>
    </header>
  )
}
