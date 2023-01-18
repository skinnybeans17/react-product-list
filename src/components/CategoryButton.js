export default function CategoryButton(props) {
    return (
      <button onClick={props.onClick}>{props.label}</button>
    )
  }