const initialState = {
  orders: [
    {
      id: 1,
      item: "mcChicken",
      quantity: "2",
      price: "12zł"
    },
    {
      id: 2,
      item: "nuggets",
      quantity: "3",
      price: "24zł"
    },
    {
      id: 3,
      item: "fries",
      quantity: "2",
      price: "12zł"
    },
    {
      id: 4,
      item: "salad",
      quantity: "3",
      price: "24zł"
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
