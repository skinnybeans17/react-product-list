import { categoriesUnique } from "../data";

export default function CategoryButton({category, setCategory}) {
    return (
      <div className={'categoryButtons'}>
        {categoriesUnique.map((name, i) => {
          const isPicked = name === category ? 'picked' : ''
          return (
            <button className={isPicked} onClick={() => setCategory(name)} key={i}>{name}</button>
          )
        })}
        <button className={category === 'All' ? 'chosen' : ''} onClick={() => setCategory('All')}>All</button>
      </div>
    );
}