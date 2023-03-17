import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { DeliverySuccess } from './pages/DeliverySuccess'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/deliverySuccess" element={<DeliverySuccess/>} />
    </Routes>
  )
}