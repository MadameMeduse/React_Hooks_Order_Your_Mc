const { createStore } = Redux;

const initialState = { orders: [] };

const myReducer = (state = initialState, { payload, type }) => {
  if (type === "ADD_ORDER") {
    return {
      orders: [...state.orders, payload]
    };
  }
};

const store = createStore(myReducer);

const addOrder = order => ({ type: "ADD_ORDER", payload: order });

store.dispatch(
  addOrder({ id: "1", item: "mcChicken", quantity: "2", price: "12zł" })
);
store.dispatch(
  addOrder({ id: "2", item: "nuggets", quantity: "3", price: "24zł" })
);

console.log(store.getState());
