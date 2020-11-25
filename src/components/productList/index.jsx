import React from 'react';
import { withStore } from '../../state/withStore';

import AddProduct from '../addProduct';
import Product from '../product';
import './product-list.scss';

class ProductList extends React.PureComponent {
  render() {
    const { products, dispatch } = this.props;

    return (
      <div className='product-list'>
        {products.map((product) => (
          <Product key={product.id} product={product} dispatch={dispatch} />
        ))}
        <AddProduct />
      </div>
    );
  }
}

export default withStore('products', (data) => data)(ProductList);
