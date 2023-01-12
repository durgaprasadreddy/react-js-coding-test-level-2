import Head from 'next/head'
import AppLayout from 'layout/app.layout'
import ReceiptsContainer from 'containers/receipts'

const ProductsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>ACN React Test Level 2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <ReceiptsContainer />
      </AppLayout>
    </div>
  )
}

export default ProductsPage
