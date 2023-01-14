import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS_LIST = [
  { id: 'p1', title: 'Product 1', price: 6, description: 'Item number 1' },
  { id: 'p2', title: 'Product 2', price: 7, description: 'Item number 2' },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS_LIST.map(({ id, title, price, description }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
