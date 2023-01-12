import Image from 'next/image'

const data = [
  { image: '/images/lazmall.png', name: 'LazMall' },
  { image: '/images/free.png', name: 'Free Shipping' },
  { image: '/images/rm9.png', name: 'RM9.90 All In' },
  { image: '/images/topup.png', name: 'Top UP & eStore' },
  { image: '/images/vouche.png', name: 'Voucher' },
]

export default function Options() {
  return (
    <div className="mt-3 flex flex-wrap lg:flex-nowrap">
      {data.map((item) => (
        <div className="card mr-3 mb-3 flex h-10 items-center pr-4 lg:w-1/4">
          <Image
            src={item.image}
            width={32}
            height={32}
            alt={item.name}
            className="m-0.5"
          />
          <span className="ml-1 text-lg text-black">{item.name}</span>
        </div>
      ))}
    </div>
  )
}
