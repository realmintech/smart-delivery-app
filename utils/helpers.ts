export const calculateTotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.qty, 0);
