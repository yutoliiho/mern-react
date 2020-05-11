import React, { Component } from 'react';
// import Provider from 'react-redux';
import AppNavbar from './components/AppNavbar';
// import ItemModal from '../src/components/ItemModal';
import ShoppingList from '../src/components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

function App() {
  return (
    <div>
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;

// <ShoppingList />
