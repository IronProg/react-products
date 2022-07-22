import { useRef } from "react";

const Select = (props) => {
  const value = useRef();

  const selectHandler = () => {
    props.onChange(value.current.value)
  }
  
  return (
    <select placeholder={props.placeholder} ref={value} className={props.className} onChange={selectHandler}>
      {props.options.map((item, index) => (
        <option key={index} value={item.name || ''}>{item.name || "All"}</option>
      ))}
    </select>
  )
}

export default Select;