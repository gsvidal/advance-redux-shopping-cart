import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
    dispatch(uiActions.setInitialValue());
  };

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
    dispatch(uiActions.setInitialValue());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
