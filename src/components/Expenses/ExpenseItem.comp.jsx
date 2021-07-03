import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate.comp";
import Card from "../UI/Card.comp";
import FormatCurrency from "../../globalFunctions/formatCurrency";

function ExpenseItem({ title, amount, date }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            {`${FormatCurrency(Number(amount), "$")}`}
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
