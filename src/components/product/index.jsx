import React from 'react';
import { REMOVE_PRODUCT } from '../../state/stores/ProductsStore';
import './product.scss';

class Product extends React.Component {
  render() {
    const { product, dispatch } = this.props;
    const price = product.price.toLocaleString('ru', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      currency: 'RUB',
      style: 'currency',
    });

    const deleteProduct = () => dispatch(REMOVE_PRODUCT, { id: product.id });
    const productDescription = product.description.split('.');

    return (
      <div className='product'>
        <div className='product-info'>
          <h1 className='product-info-title'>
            {product.title} - {product.id}
          </h1>
          <ul className='product-info-description'>
            {productDescription.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div>
            <span className='product-info-price'>{price}</span>
          </div>
          <button
            onClick={deleteProduct}
            className='product-info-delete-button'>
            Delete Product
          </button>
        </div>
        <div className='product-image-frame'>
          <img
            className='product-image'
            src='https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg'
            alt=''
          />
        </div>
      </div>
    );
  }
}

export default Product;
