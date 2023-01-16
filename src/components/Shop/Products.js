import ProductItem from './ProductItem';
import classes from './Products.module.css';
import macbookImage from '../../assets/images/macbook.jfif';
import iphoneImage from '../../assets/images/iphone14.png';

const PRODUCTS_LIST = [
  {
    id: 'ambp13',
    title: 'Apple MacBook Pro 13.3"',
    price: 1499,
    description:
      'Apple MacBook Pro 13.3" with Retina Display, M2 Chip with 8-Core CPU and 10-Core GPU, 16GB Memory, 256GB SSD, Silver, Mid 2022',
    imageURL: macbookImage,
  },
  {
    id: 'ip14pm',
    title: 'iPhone 14 Pro Max',
    price: 1029,
    description:
      'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.',
    imageURL: iphoneImage,
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS_LIST.map(({ id, title, price, description, imageURL }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            imageURL={imageURL}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
