import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';

function App() {
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isInitialLoading = useSelector((state) => state.ui.isInitialLoading);
  const dispatch = useDispatch();

  console.log(notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialLoading) {
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch, isInitialLoading]);

  return (
    <>
      {notification && notification.status !== 'clear' && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
