import classes from "./Filter.module.css";

import Select from "../UI/Input/Select";

const Filter = (props) => {
  const changeHandler = (id) => {
    props.onFilter(id);
  };

  return (
    <>
      <form className={classes.form}>
        <p className={classes.title}>Filter by category:</p>
        <Select options={props.options} onChange={changeHandler} className={classes.select} />
      </form>
    </>
  );
};

export default Filter;
