import Title from 'components/title'
import { CART_ITEMS } from 'constants/variables'
import { ProductInterface } from 'pages'
import React, { useEffect, useState } from 'react'
import Chart from './chart'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export type ChartData = [string, number]

export default function ProductsContainer({}) {
  const [products, setProducts] = useState([] as ChartData[])
  const [data, setData] = useState([] as ProductInterface[])

  useEffect(() => {
    const data = localStorage.getItem(CART_ITEMS)
    if (data) {
      let chartData: ChartData[] = []
      const parsedData = JSON.parse(data)
      parsedData.map((p: ProductInterface) => {
        chartData.push([p.title, p.price])
      })
      setData(parsedData)
      setProducts(chartData)
    }
  }, [])

  const downloadPdf = (divId: string) => {
    const element = document.getElementById(divId)
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'PNG', 0, 0, 0, 0)
        pdf.save('download.pdf')
      })
    }
  }

  return (
    <div id="myDiv" className="shadoe m-auto my-4 w-content">
      <div className="flex items-center justify-between">
        <Title>Products</Title>
        <button
          onClick={() => downloadPdf('products')}
          className="flex items-center rounded-full bg-primary py-2 px-4 font-bold text-white hover:bg-primary-dark"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download Receipt
        </button>
      </div>
      <div className="mt-2 rounded-sm bg-white">
        <Chart data={products} />
        <div id="products">
          <div className="m-4 mr-96 ">
            <div className="flex items-center p-2">
              <div className="flex-1 font-bold">Product</div>
              <div className="flex-1 font-bold">Price</div>
            </div>
            <div className="pb-4">
              {data.map((p, index) => (
                <div className="m-1.5 flex flex-1 items-center rounded">
                  <div className="flex-1 pr-4">{p.title}</div>
                  <div className="flex-1">${p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
