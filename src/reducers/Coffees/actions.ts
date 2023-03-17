import { Coffee, InfoPayment } from './reducer';
import { getCoffeesMock } from "../../mocks/getCoffees";

export enum ActionType {
  GET_ALL_COFFEES = 'GET_ALL_COFFEES',
  ADD_PRODUCT_ON_CART = 'ADD_PRODUCT_ON_CART',
  DELETE_ONE_PRODUCT = 'DELETE_ONE_PRODUCT',
  ADD_QUANTITY_ON_CART = 'ADD_QUANTITY_ON_CART',
  REMOVE_QUANTITY_ON_CART = 'REMOVE_QUANTITY_ON_CART',
  FINALIZE_CART = 'FINALIZE_CART'
}

export function getAllCoffeesAction() {
  return {
    type: ActionType.GET_ALL_COFFEES,
    payload: getCoffeesMock
  }
}

export function addProductOnCartAction(product: Coffee) {
  return {
    type: ActionType.ADD_PRODUCT_ON_CART,
    payload: product
  }
}

export function deleteOneProduct(product: Coffee){
  return {
    type: ActionType.DELETE_ONE_PRODUCT,
    payload: product
  }
}

export function addQuantityProduct(product: Coffee){
  return {
    type: ActionType.ADD_QUANTITY_ON_CART,
    payload: product
  }
}

export function removeQuantityProduct(product: Coffee){
  return {
    type: ActionType.REMOVE_QUANTITY_ON_CART,
    payload: product
  }
}

export function finalizeCart(infoPayment: InfoPayment) {
  return {
    type: ActionType.FINALIZE_CART,
    payload: infoPayment
  }
}