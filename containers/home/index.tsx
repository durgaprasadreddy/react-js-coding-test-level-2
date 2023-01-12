import About from 'components/about'
import BottomMenu from 'components/bottomMenu'
import HomeSlider from 'components/slider'
import { ProductInterface } from 'pages'
import Categories from './categories'
import FlashSale from './flashSale'
import JustForYou from './justForYou'
import LazMall from './lazMall'
import Options from './options'
import Partners from './partners'

interface HomeContainerProps {
  products: ProductInterface[]
}

export default function HomeContainer({ products }: HomeContainerProps) {
  return (
    <div className="">
      <HomeSlider />
      <div className="m-auto px-4 lg:w-content lg:px-0">
        <Options />
        <FlashSale products={products} />
        <LazMall products={products} />
        <Categories />
        <JustForYou products={products} />
        <BottomMenu />
      </div>
      <Partners />
      <About />
    </div>
  )
}
