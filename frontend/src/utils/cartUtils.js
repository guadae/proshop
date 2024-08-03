// helper function for decimal placement
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  // calculate items price 
  state.itemsPrice = addDecimals(state.cartItems.reduce((accumulator, item) => accumulator + item.price * item.qty, 0));

  // calculate shipping price (if order is > $100 then free, else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10) 

  // calculate tax price 
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

  // calculate total price 
  state.totalPrice = (
    Number(state.itemsPrice) + 
    Number(state.shippingPrice) + 
    Number(state.taxPrice)
  ).toFixed(2);

  // save to local storage 
  localStorage.setItem('cart', JSON.stringify(state));
  
  return state;
}