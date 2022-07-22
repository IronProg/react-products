import { useRef } from "react";

const Select = (props) => {
  const value = useRef();

  const selectHandler = () => {
    props.onChange(value.current.value)
  }

  return (
    <select placeholder={props.placeholder} ref={value} className={props.className} onChange={selectHandler}>
      <option value='' key={''}>All</option>
      {props.options.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </select>
  )
}

export default Select;