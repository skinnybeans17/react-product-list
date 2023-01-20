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
            <h2>{item.name}</h2>
            <h5>{item.category}</h5>
            <h6>{item.description}</h6>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
}