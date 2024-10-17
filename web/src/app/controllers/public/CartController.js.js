import { getCartItems } from '@helpersPublic/CartHelper';
import { CartModel } from '@models/CartModel';

export class CartController {
 fetchCartItems() {
   return getCartItems();
 }

 constructor() {
  this.cart = [];
}

// Adiciona um item ao carrinho
addItem(item) {
  this.cart.push(item);
}

// Remove um item do carrinho pelo índice
removeItem(index) {
  if (index >= 0 && index < this.cart.length) {
    this.cart.splice(index, 1);
  }
}

// Lista todos os itens no carrinho
listItems() {
  return this.cart;
}

// Limpa o carrinho
clearCart() {
  this.cart = [];
}
}