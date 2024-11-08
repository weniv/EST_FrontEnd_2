import ExpenseInput from "./containers/ExpenseInput";
import ExpenseList from "./containers/ExpenseList";
import InputIncome from "./containers/InputIncome";
import ExpenseTotal from "./containers/ExpenseTotal";

function App() {
  return (
    <div>
      <InputIncome />
      <ExpenseInput />
      <ExpenseList />
      <ExpenseTotal />
    </div>
  );
}
export default App;
