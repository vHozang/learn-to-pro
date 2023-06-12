import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item_desciption">
        <h2>title</h2>
        <div className="expense-item_price">amout</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
