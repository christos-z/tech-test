import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemsContainer from './components/ItemsContainer';
import ItemFilter from './components/ItemFilter';


import './app.css';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <div>
            <ItemFilter />
            <ItemCreator />
            <ItemsContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
