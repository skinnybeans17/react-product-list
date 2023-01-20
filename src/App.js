import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import CategoryButton from './components/CategoryButton';

function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Product List</h1>
      <main>
        <Product category={category}/>
        <CategoryButton setCategory={setCategory}/>
      </main>
      </header>
    </div>
  );
}

export default App;