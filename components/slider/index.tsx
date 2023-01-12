import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function HomeSlider() {
  return (
    <div className="flex justify-center bg-red-900">
      <div className="hidden w-52 border-t border-t-bg-gray bg-white lg:block">
        <ul className="py-1 text-xs text-menu-text">
          {[
            'Electronic Accessories',
            'Electronic Devices',
            'TV & Home Appliances',
            'Halth & Beauty',
            'Babbies & Toys',
            'Groceries & Pets',
            'Home & Lifestyle',
            'Womens Fashion & Access...',
            'Mens Fashion & Accessories',
            'Kids Fashion & Accessories',
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer pl-2 leading-7 hover:bg-bg-gray hover:text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Carousel
        key={'carousel'}
        showStatus={false}
        showThumbs={false}
        // width={1000}
        showArrows={false}
        className="w-1000"
      >
        <div key={1}>
          <Image
            src="/images/slider/slider-1.jpg"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={2}>
          <Image
            src="/images/slider/slider-2.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={3}>
          <Image
            src="/images/slider/slider-3.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={4}>
          <Image
            src="/images/slider/slider-4.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={5}>
          <Image
            src="/images/slider/slider-5.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={6}>
          <Image
            src="/images/slider/slider-6.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={7}>
          <Image
            src="/images/slider/slider-7.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={8}>
          <Image
            src="/images/slider/slider-8.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
        <div key={9}>
          <Image
            src="/images/slider/slider-9.webp"
            alt="banner"
            width={1000}
            height={304}
          />
        </div>
      </Carousel>
    </div>
  )
}
