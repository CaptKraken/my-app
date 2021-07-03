import "./ExpenseTotal.scss";
import FormatCurrency from "../../globalFunctions/formatCurrency";

export default function ExpenseTotal({ expenses }) {
  return (
    <div className="expenses__total">
      <p>Total: </p>
      <p>
        {FormatCurrency(
          expenses.reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.amount),
            0
          ),
          "$"
        )}
      </p>
    </div>
  );
}
