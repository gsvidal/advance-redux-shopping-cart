import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// Action Creator Functions

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://advance-redux-shopping-cart-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceFetchedCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed!',
          message: 'Failed at fetching cart items',
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart items',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://advasdfnce-redux-shopping-cart-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart items sent successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Something went wrong',
          message: 'Failed at sending cart items',
        })
      );
    }
    // After either success or error notification component should be cleared
    setTimeout(() => {
      dispatch(
        uiActions.showNotification({
          status: 'clear',
        })
      );
    }, 3000);
  };
};
