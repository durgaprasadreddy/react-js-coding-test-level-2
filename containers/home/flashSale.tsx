import Countdown from 'components/countdown'
import TextWithEllipsis from 'components/textWithEllipsis'
import Title from 'components/title'
import Image from 'next/image'
import Link from 'next/link'
import { ProductInterface } from 'pages'

interface FlashSaleProps {
  products: ProductInterface[]
}

export default function FlashSale({ products }: FlashSaleProps) {
  const renderShopProducts = () => (
    <Link href={'/products'}>
      <button className="flex items-center justify-center rounded-sm border border-primary px-2.5 text-sm font-medium leading-9 text-primary">
        SHOP ALL PRODUCTS
      </button>
    </Link>
  )
  return (
    <div className="mt-4">
      <div className="mb-1 flex items-center justify-between">
        <Title>Flash Sale</Title>
        <div className="mb-2 lg:hidden">{renderShopProducts()}</div>
      </div>
      <div className="rounded-sm bg-white pb-2">
        <div className="flex items-center justify-between border-b border-b-border-gray px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mb-3 text-sm text-primary md:mr-24 md:mb-0">
              On Sale Now
            </div>
            <div className="flex">
              <div>Ending</div>
              <Countdown time={39000} />
            </div>
          </div>
          <div className="hidden lg:block">{renderShopProducts()}</div>
        </div>
        <div className="mt-3 flex flex-wrap pb-3">
          {products.map((product, index) =>
            index > 5 ? null : (
              <div
                key={product.id}
                className="mb-2 w-1/2 cursor-pointer hover:shadow-xl sm:w-4/12 md:w-3/12 lg:mb-0 lg:w-1/6"
              >
                <Image
                  src={product.image}
                  height={138}
                  width={188}
                  alt={''}
                  className="h-44 w-36"
                />
                <div className="px-1 py-1 text-sm text-black">
                  <TextWithEllipsis text={product.title} numberOfLines={2} />
                  <div className="text-lg text-primary">RM${product.price}</div>
                  <div className="flex text-xs text-light-gray">
                    <div className="line-through">RM25.00</div>
                    <div className="ml-1 text-black"> -60%</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
