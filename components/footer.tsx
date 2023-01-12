import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faCartShopping,
  faFlag,
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="flex justify-between bg-white py-10">
      <div className="m-auto flex w-content items-center justify-between py-4">
        <div>
          <div className="ml-1 text-base text-light-black">
            Lazada Southeast Asia
          </div>
          <div className="cursor-pointer">
            <Image src="/images/countries.png" height={35} width={200} />
          </div>
        </div>
        <div>
          <div className="ml-1 text-base text-light-black">Follow Us</div>
          <div className="cursor-pointer">
            <Image src="/images/social.png" height={35} width={180} />
          </div>
        </div>
        <div className="text-sm text-light-gray">© Lazada 2023</div>
      </div>
    </footer>
  )
}
