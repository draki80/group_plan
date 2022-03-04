import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TitleComponent from './components/TitleComponent'
import CategoriesComponent from './components/CategoriesComponent';

function App() {
  return (
  <div className="container" data-testid="container">
    <TitleComponent/>
    <CategoriesComponent/>
  </div>
  );
}

export default App;
