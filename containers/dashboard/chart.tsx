import { ProductInterface } from 'pages'
import React from 'react'
import { Chart } from 'react-google-charts'

export const options = {
  title: 'Cart Products',
}

interface ChartProps {
  data: ProductInterface[]
}

export default function PieChart({ data }: ChartProps) {
  return (
    <Chart
      chartType="PieChart"
      data={[['Product', 'Price'], ...data]}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  )
}
