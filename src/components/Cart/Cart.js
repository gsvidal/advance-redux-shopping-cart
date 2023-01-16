import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(({ id, price, quantity, totalPrice, name }) => (
          <CartItem
            key={id}
            item={{
              id: id,
              title: name,
              quantity: quantity,
              total: totalPrice,
              price: price,
            }}
          />
        ))}
      </ul>
      {totalAmount !== 0 ? (
        <div className={classes['shop-button-container']}>
          <p className={classes.total}>
            Total amount: $ {totalAmount.toFixed(2)}
          </p>
          <button>Shop Now</button>
        </div>
      ) : (
        <p className={classes.total}>Your cart is empty</p>
      )}
    </Card>
  );
};

export default Cart;
