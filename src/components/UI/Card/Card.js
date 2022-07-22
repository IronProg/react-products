import classes from './Card.module.css';

const Card = ({ children, color, className }) => {
  return (
    <div className={`${classes.card} ${className}`} style={{backgroundColor: color}}>
      {children}
    </div>
  )
}

export default Card;