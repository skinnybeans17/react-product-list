import { useState } from 'react';
import data, { allCategories, productCount, namesAndCategories, categoriesWithCounts, categoriesUnique } from './data'
import './App.css';
import Product from './components/Product';
import CategoryButton from './components/CategoryButton';

function App() {
  const [category, setCategory] = useState('All');

  const selectCategory = (en) => {
    let val = en.target.value;
    if (val === 'All') setCategory(['All']);
    else if (category.includes(val)) {
      setCategory((category) => category.filter((item) => item !== val));
    } else if (!category.includes(val)) {
      setCategory([category, val]);
    }
  };

  const categoryButtons = categoriesUnique.sort().map((name) => {
    const className = category.includes(name) ? 'selected-category' : '';
    return <CategoryButton value={name} onClick={(en) => selectCategory(en)}
            key={name} className={className} itemCount={categoriesWithCounts[name]}/>
  });

  return (
    data.filter((item) => {
      return item.category === category || category === 'All'}).map(item => {  })
  )
}

export default App;
