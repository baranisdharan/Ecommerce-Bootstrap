import React from 'react';
import NavBar from './Components/MainHeader/NavBar';
import Header from './Components/MainHeader/Header';
import ProductsOnScreen from './Components/Layout/ProductsOnScreen';

function App() {
  return <div>
    <NavBar />
    <Header/>
    <ProductsOnScreen />
  </div>;
}

export default App;