import React from "react";
const { useReducer } = React;
const HooksUseReducer = ({username = "vic"}) => {
  const initialState = {
    name: "",
    age: 0,
    isMale: true,
  };
  const createInitialState = (username) => {
    return {
      name: username,
      age: 0,
      isMale: true,
    };
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_AGE_INCREMENT":
        return { ...state, age: state.age + 1 };
      case "SET_AGE_DECREMENT":
        return { ...state, age: state.age - 1 };
      case "SET_IS_MALE":
        let temp;
        state.isMale ? (temp = false) : (temp = true);
        return { ...state, isMale: temp };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, username, createInitialState);

  return (
    <>
      <p>Name: {state.name}</p>
      <input
        type='text'
        onInput={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      ></input>
      <p>Age: {state.age}</p>
      <button onClick={() => dispatch({ type: "SET_AGE_DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "SET_AGE_INCREMENT" })}>+</button>
      <p>isMale: {state.isMale.toString()}</p>
      <button onClick={() => dispatch({ type: "SET_IS_MALE" })}>
        change gender
      </button>
    </>
  );
};
export default HooksUseReducer;
