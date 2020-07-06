import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const addItemToShoppingList = value => {
    setShoppingList([...shoppingList, value]);
  };

  return (
    <div className="App">
      <ul>
        {shoppingList.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <input name="item" />
      <button onClick={addItemToShoppingList}>Add item</button>
    </div>
  );
};

export default App;
