import styles from './Item2.module.css'

const Item2 = ({ id, foodItem, price, onBuy, onCheck, onGetEvent }) => {

  const handleButtonClicked = () => {
    onBuy(id, foodItem, price); // 🔥 multiple params
  };

  return (
    <li className="list-group-item">
      <span>{foodItem} - ₹{price}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleButtonClicked}>
        Buy
      </button>
      <button
        className={`${styles.button} btn btn-warning`}
        onClick={()=> onCheck({id,foodItem, price})}>
        Buy
      </button>
      <button
        className={`${styles.button} btn btn-danger`}
        onClick={(event)=> onGetEvent(event, foodItem)}>
        Buy
      </button>
    </li>
  );
}

export default Item2;
