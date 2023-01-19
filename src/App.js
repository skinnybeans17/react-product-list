import { useState } from 'react';
import data, { allCategories, categoriesWithCounts, categoriesUnique } from './data'
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

  const filterItems = data.filter((item) =>
    item.category === category || category === 'All').map(item => {  })

  let displayedItems = filterItems.map((item) => {
    return <Product key={item.id} name={item.name} price={item.price} category={item.category} units={item.units} rating={item.rating}
    />
  });

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Product List</h1>
        <div className="CategoryList">
          {categoryButtons}
          <CategoryButton value={'All'} onClick={(en) => selectCategory(en)} key={'All'}
          className={category.includes('All') ? 'selected-category' : ''} itemCount={allCategories.length}/>
        </div>
        <div className='products'>
          {displayedItems}
        </div>
      </header>
      </div>
  );
}

export default App;
