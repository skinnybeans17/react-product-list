import data from "../data"

export default function Product(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    )
  }