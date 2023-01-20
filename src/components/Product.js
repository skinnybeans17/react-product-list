import data from "../data";

export default function Product({category}) {
    return (
      <div className={'items'}>
        {data
          .filter((item) => {
            return item.category === category || category === "All";
          })
          .map((item) => (
          <div key={item.id} className="items-list">
            <h1>{item.name}</h1>
            <p>{item.category}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
}