import Expresso from '../assets/expresso.svg'
import Americano from '../assets/americano.svg'
import Arabe from '../assets/arabe.svg'
import CafeComLeite from '../assets/cafe-com-leite.svg'
import CafeGelado from '../assets/cafe-gelado.svg'
import Capuccino from '../assets/capuccino.svg'
import ChocolateQuente from '../assets/chocolate-quente.svg'
import Cubano from '../assets/cubano.svg'
import ExpressoCremoso from '../assets/expresso-cremoso.svg'
import Havaiano from '../assets/havaiano.svg'
import Irlandes from '../assets/irlandes.svg'
import Latte from '../assets/latte.svg'
import Macchiato from '../assets/macchiato.svg'
import Mocaccino from '../assets/mocaccino.svg'
import { Coffee } from '../reducers/Coffees/reducer'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../contexts/Coffees'

export function ProductCart(product: Coffee) {

  function chooseImage() {
    switch(product.img) {
      case 'expresso.svg': return Expresso
      case 'americano.svg': return Americano
      case 'expresso-cremoso.svg': return ExpressoCremoso
      case 'café-gelado.svg': return CafeGelado
      case 'café-com-leite.svg': return CafeComLeite
      case 'latte.svg': return Latte
      case 'capuccino.svg': return Capuccino
      case 'macchiato.svg': return Macchiato
      case 'chocolate-quente.svg': return ChocolateQuente
      case 'mocaccino.svg': return Mocaccino
      case 'cubano.svg': return Cubano
      case 'arabe.svg': return Arabe
      case 'havaiano.svg': return Havaiano
      case 'irlandês.svg': return Irlandes
      default: return Expresso
    }
  }
  const productQuantity = product.quantity ? product.quantity : 1
  const totalPrice = (Math.round((productQuantity * product.price) * 100) / 100).toFixed(2)
  const { deleteOneProductOnCart, addQuantityOnCart, removeQuantityOnCart } = useContext(CoffeesContext)
  return (
    <div className='flex flex-row border-b border-base-button pb-6'>
      <img src={chooseImage()} className='w-16 h-16' />
      <div className='ml-5 flex flex-col gap-2'>
        <span className='text-base text-base-subtitle'>{product.productName}</span>
        <div className='flex flex-row gap-2'>
          <div className="rounded-md bg-base-button gap-1 p-2 flex justify-center items-center h-8">
            <button onClick={() => removeQuantityOnCart(product)}>
              <Minus size={14} color={"#8047F8"} className="cursor-pointer" />
            </button>
            <span className="text-base text-base-title mx-2">{product.quantity}</span>
            <button onClick={() => addQuantityOnCart(product)}>
              <Plus size={14} color={"#8047F8"} className="cursor-pointer" />
            </button>
          </div>
          <button className='h-8 flex flex-row text-xs text-base-text gap-2 bg-base-button p-2 rounded-md' 
            onClick={() => deleteOneProductOnCart(product)}>
            <Trash size={16} color={'#8047F8'}/>
            REMOVER
          </button>
        </div>
      </div>
      <span className='font-bold text-base ml-10'>R$ {totalPrice}</span>
    </div> 
  )
}