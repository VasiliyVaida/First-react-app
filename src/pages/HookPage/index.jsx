import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesNames";
import { Counter } from "../../common/Counter";


export const CountersPage = ({
  counters,
  totalValue,
  totalCounters,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemoveCounter,
  handleAddCounter,
  handleDestroyCounters,
}) => (
  <div>
    <h1>Hook Counters Page</h1>
    <Link to={ROUTES.HOME_PAGE}>
      <button className="return-btn">Get back</button>
    </Link>
    <div>
      <button className="add-btn" onClick={handleAddCounter}>Add counter</button>
      <button className="remove-btn" onClick={handleDestroyCounters}>Remove All Counters</button>
      <h2>Total counters: {totalCounters}</h2>
      <h2>Total value: {totalValue}</h2>
    </div>
    <div>
      {counters.map((counter, index) => {
        return (
          <div>
            <Counter
              countValue={counter.counterValue}
              handleIncrement={() => handleIncrement(index)}
              handleDecrement={() => handleDecrement(index)}
              handleReset={() => handleReset(index)}
              handleRemoveCounter={() => handleRemoveCounter(index)}
            />
          </div>
        )
      })}
    </div>
  </div>
);