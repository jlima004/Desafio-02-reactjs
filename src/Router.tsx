import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { PurchaseContext } from './contexts/PurchaseContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { Success } from './pages/success'

export function Router() {
  const { buyState } = useContext(PurchaseContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={'/'} element={<Home />} />
        {buyState === 'BUYING' && (
          <Route path="/checkout" element={<Checkout />} />
        )}
        {buyState === 'BUYED' && (
          <Route path="/success" element={<Success />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
