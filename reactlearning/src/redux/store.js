import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Steps:
//1. Create Store
// 2. Wrap app component into Provider in main.jsx file and pass store as a prop to provider
// 3. Create Slice (reducer + actions) using createSlice function from redux toolkit
// 4. Use useSelector to read state from the store and useDispatch to dispatch actions to
// the store in your component (counter.jsx)
// 5. Create a counter.jsx for accessing all the store value

// Redux Toolkit Flow (very important)
// Component → dispatch(action)
// Action → Reducer
// Reducer → Store updates
// Store → Component re-renders

// What just happened? (Super important)

//1. useSelector → reads data from Redux store

//2. useDispatch → sends actions to Redux

//3. increment() → action

//4. counterSlice.reducer → updates state
