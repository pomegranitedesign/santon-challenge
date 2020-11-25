import React from 'react';
import uuid from 'uuid/dist/v4';
import Modal from 'react-modal';
import { ADD_PRODUCT } from '../../state/stores/ProductsStore';
import { withStore } from '../../state/withStore';
import './add-product.scss';

// react-modal API needs to bind the root of the app
Modal.setAppElement('#root');

class AddProduct extends React.Component {
  state = {
    modalOpened: false,
    title: '',
    description: '',
    price: 0,
  };

  openModal = () => this.setState({ modalOpened: true });
  closeModal = () => this.setState({ modalOpened: false });

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  clearInputs = () => this.setState({ title: '', description: '', price: 0 });

  addProduct = () => {
    const { dispatch } = this.props;
    const { title, description, price } = this.state;

    const product = {
      id: uuid(),
      title,
      description,
      price,
    };
    dispatch(ADD_PRODUCT, { product });

    this.clearInputs();
    this.closeModal();
  };

  render() {
    const { modalOpened, title, description, price } = this.state;
    const valuesEntered = title && description && price > 0;

    return (
      <div className='add-product'>
        <button className='add-product-add-button' onClick={this.openModal}>
          + Add product
        </button>
        <Modal
          className='add-product-modal'
          onRequestClose={this.closeModal}
          isOpen={modalOpened}>
          <form onSubmit={this.addProduct} className='add-product-modal-inputs'>
            <input
              onChange={this.handleChange}
              className='add-product-input'
              placeholder='Enter title'
              type='text'
              name='title'
              value={title}
            />
            <input
              onChange={this.handleChange}
              className='add-product-input'
              placeholder='Enter description'
              type='text'
              name='description'
              value={description}
            />
            <input
              onChange={this.handleChange}
              className='add-product-input'
              placeholder='Enter price'
              type='number'
              name='price'
              value={price}
            />
          </form>
          <button
            type='submit'
            onClick={this.addProduct}
            disabled={!valuesEntered}
            className='add-product-button'>
            Add Product
          </button>
        </Modal>
      </div>
    );
  }
}

export default withStore('products', (data) => data)(AddProduct);
