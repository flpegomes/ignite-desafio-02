import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CoffeeLogo from '../assets/coffee-delivery-logo.svg'
import { CoffeesContext } from '../contexts/Coffees'

export function Header() {
  const { cart } = useContext(CoffeesContext)
  return (
    <div className="w-full h-28 flex justify-between items-center pl-40 pr-40">
      <img src={CoffeeLogo} />
      <div className='flex gap-3'>
        <div className='rounded-md gap-1 p-2 h-9 bg-purple-light flex'>
          <MapPin size={22} fill={'#8047F8'} weight='fill'/>
          <span className='text-sm text-purple-dark'>São Paulo - SP</span>
        </div>
        <NavLink to="/cart" className='relative rounded-md p-2 h-9 bg-yellow-light flex overflow-visible text-white font-bold text-xs'>
          <ShoppingCart size={22} fill={'#C47F17'} weight='fill'/>
          {cart.items.length > 0 && (
            <div className="absolute top-0 right-0 -mt-2 -mr-2 px-1 py-1 h-5 w-5 flex justify-center items-center bg-yellow-dark rounded-full">{cart.items.length}</div>
          )}
        </NavLink>
      </div>
    </div>
  )
}