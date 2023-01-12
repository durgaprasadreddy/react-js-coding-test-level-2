import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CART_ITEMS } from 'constants/variables'

interface Props {}

const FloatButton: React.FC<Props> = () => {
  const [showCartNumber, setShowCartNumber] = useState(false)
  const [cartNumber, setCartNumber] = useState(0 as number)

  useEffect(() => {
    const data = localStorage.getItem(CART_ITEMS)
    if (data) {
      const parsedData = JSON.parse(data)
      setCartNumber(parsedData.length)
    }
  }, [])

  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-4 rounded-full bg-primary p-4 text-white"
        onClick={() => setShowCartNumber(!showCartNumber)}
      >
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {showCartNumber && (
          <span className="ml-2 rounded-full bg-tint p-1 text-xs font-medium text-white">
            {cartNumber}
          </span>
        )}
      </button>
    </>
  )
}

export default FloatButton
