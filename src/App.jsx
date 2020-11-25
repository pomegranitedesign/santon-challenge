import React from 'react';
import './state/stores/UserStore';
import './index.scss';

import ProductList from './components/productList';
import { withStore } from './state/withStore';
import { Auth } from './components/auth';

class App extends React.Component {
  render() {
    const { user, dispatch } = this.props;
    return (
      <main>
        <h1>Frontend Test Task</h1>
        <ProductList />
      </main>
    );
  }
}

export default withStore('user', (data) => data)(App);
