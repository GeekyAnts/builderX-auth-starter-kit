import { createStore } from "redux";
import reducers from "./reducers";

export default function configureStore(onCompletion: () => void): any {
  const store = createStore(reducers);

  return store;
}
