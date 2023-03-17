import { ActionType } from "./actions"

export interface Coffee {
  id: number,
  tags: string[],
  productName: string,
  productDescription: string,
  price: number,
  img: string,
  quantity: number
}

export interface Cart {
  totalPrice: number,
  items: Coffee[],
  infoPayment?: InfoPayment
}


interface CoffeesState {
  coffees: Coffee[],
  cart: Cart,
}

export interface InfoPayment {
  cep: string,
  rua: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  payment: string
}

export function coffeesReducer(state: CoffeesState, action: any) {

  let productIndex;
  let newListCart;

  console.log(action.type)
  switch(action.type) {
    case ActionType.GET_ALL_COFFEES: 
      return {
        ...state,
        coffees: action.payload
      }
    case ActionType.ADD_PRODUCT_ON_CART: 
      const existsProductIndex = state.cart.items.findIndex(product => product.id === action.payload.id)
      
      if(existsProductIndex >= 0) {
        const totalPriceCalc = state.cart.totalPrice + state.cart.items[existsProductIndex].quantity * state.cart.items[existsProductIndex].price
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              state.cart.items[existsProductIndex] = {
                ...state.cart.items[existsProductIndex],
                quantity: state.cart.items[existsProductIndex].quantity + action.payload.quantity
              }
            ],
            totalPrice: totalPriceCalc
          }
        }
      } else {
        const totalPriceCalc = state.cart.totalPrice + action.payload.quantity * action.payload.price
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              action.payload
            ],
            totalPrice: totalPriceCalc
          }
        }
      }
    case ActionType.DELETE_ONE_PRODUCT:
      newListCart = state.cart.items.filter((product) => product.id !== action.payload.id)
      const totalPriceCalc = state.cart.totalPrice - (action.payload.price * action.payload.quantity)

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newListCart,
          totalPrice: totalPriceCalc
        }
      }
    
    case ActionType.ADD_QUANTITY_ON_CART: 
      productIndex = state.cart.items.findIndex(product => product.id === action.payload.id)
      newListCart = state.cart.items
      newListCart[productIndex].quantity = newListCart[productIndex].quantity + 1

      return {
        ...state,
        cart: { 
          ...state.cart,
          items: newListCart,
          totalPrice: state.cart.totalPrice + (newListCart[productIndex].price)
        }
      }
    
    case ActionType.REMOVE_QUANTITY_ON_CART: 

      productIndex = state.cart.items.findIndex(product => product.id === action.payload.id)
      newListCart = state.cart.items
      newListCart[productIndex].quantity = newListCart[productIndex].quantity - 1

      return {
        ...state,
        cart: { 
          ...state.cart,
          items: newListCart,
          totalPrice: state.cart.totalPrice - (newListCart[productIndex].price)
        }
      }

    case ActionType.FINALIZE_CART: 
      return {
        ...state,
        cart: {
          ...state.cart,
          infoPayment: action.payload
        }
      }
      
    default: 
      return state
  }
}