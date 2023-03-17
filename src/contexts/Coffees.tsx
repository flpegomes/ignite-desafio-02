import { createContext, ReactNode, useReducer } from "react";
import { getAllCoffeesAction, addProductOnCartAction, deleteOneProduct, addQuantityProduct, removeQuantityProduct, finalizeCart } from "../reducers/Coffees/actions";
import { Coffee, coffeesReducer, Cart, InfoPayment } from '../reducers/Coffees/reducer'

interface CoffeesContextType {
  coffees: Coffee[], 
  cart: Cart,
  getCoffees: () => void,
  addProductOnCart: (product : Coffee) => void,
  deleteOneProductOnCart: (product : Coffee) => void,
  addQuantityOnCart: (product : Coffee) => void,
  removeQuantityOnCart: (product : Coffee) => void,
  finishCart: (infoPayment : InfoPayment) => void,
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children
} : CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      cart: {
        items: [],
        totalPrice: 0,
      },
    }
  )

  const { coffees, cart } = coffeesState

  function getCoffees() {
    dispatch(getAllCoffeesAction())
  }

  function addProductOnCart(product : Coffee) {
    dispatch(addProductOnCartAction(product))
  }

  function deleteOneProductOnCart(product: Coffee) {
    dispatch(deleteOneProduct(product))
  }

  function addQuantityOnCart(product: Coffee) {
    dispatch(addQuantityProduct(product))
  }

  function removeQuantityOnCart(product: Coffee) {
    dispatch(removeQuantityProduct(product))
  }

  function finishCart(infoPayment: InfoPayment) {
    dispatch(finalizeCart(infoPayment))
  }

  return (
    <CoffeesContext.Provider
      value={{
        getCoffees,
        coffees,
        addProductOnCart,
        cart,
        deleteOneProductOnCart,
        addQuantityOnCart,
        removeQuantityOnCart,
        finishCart
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}