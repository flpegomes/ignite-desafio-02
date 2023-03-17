import { Minus, Plus, ShoppingCart } from "phosphor-react";
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


import { Coffee } from "../reducers/Coffees/reducer";
import { useContext, useState } from "react";
import { CoffeesContext } from "../contexts/Coffees";

export function ProductCard(product: Coffee) {
  
  const [countProduct, setCountProduct] = useState(1);
  const { addProductOnCart } = useContext(CoffeesContext) 

  function addCountProduct() {
    setCountProduct(countProduct + 1)
  }

  function removeCountProduct() {
    setCountProduct(countProduct - 1)
  }

  function addProductCart() {
    const productToCart = {
      ...product,
      quantity: countProduct
    }

    addProductOnCart(productToCart) 
    setCountProduct(1)
  }

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

  return (
    <div className="h-80 w-64 rounded-tr-[36px] rounded-tl-[6px] rounded-br-[6px] rounded-bl-[36px] bg-base-card flex flex-col items-center p-5">
      <img className="mt-[-36px]" src={chooseImage()}/>
      <div className="flex flex-row justify-center items-center mt-3 gap-1">
          {product.tags.map(tag => (
            <div className="rounded-full bg-yellow-light h-5 flex justify-center items-center px-2 py-" key={product.productName + tag}>
              <span className="text-yellow-dark font-sans text-[10px] font-bold">{tag}</span>
            </div>
          ))}
      </div>
      <h1 className="font-baloo font-bold text-xl mt-4">{product.productName}</h1>
      <span className="text-sm text-center mt-2 text-base-label">{product.productDescription}</span>
      <div className="flex flex-row justify-center items-center mt-8">
        <div className="mr-6">
          <span className="text-sm font-sans mr-2">R$</span>
          <span className="text-2xl font-baloo">{(Math.round(product.price * 100) / 100).toFixed(2)}</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="rounded-md bg-base-button gap-1 p-2 flex justify-center items-center">
            <button onClick={removeCountProduct}>
              <Minus size={14} color={"#8047F8"} className="cursor-pointer" />
            </button>
            <span className="text-base text-base-title mx-2">{countProduct}</span>
            <button onClick={addCountProduct}>
              <Plus size={14} color={"#8047F8"} className="cursor-pointer" />
            </button>
          </div>
          <div className='rounded-md p-2 h-9 bg-purple-dark flex  cursor-pointer hover:bg-purple-normal' onClick={addProductCart}>
            <ShoppingCart size={22} fill={'#F3F2F2'} weight='fill' />
          </div>
        </div>
      </div>
    </div>
  )
}