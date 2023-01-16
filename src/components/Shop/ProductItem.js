import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

const ProductItem = (props) => {
  const { id, title, price, description, imageURL } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
    dispatch(uiActions.setInitialValue());
  };

  return (
    <li className={classes.item}>
      <Card className={classes.product}>
        <img
          src={imageURL}
          alt={title}
          className={classes.image}
          width="80"
          height="80"
        />
        <div>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
