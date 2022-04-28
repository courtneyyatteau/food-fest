import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import gaReducer from "./gaReducer";
import vipReducer from "./vipReducer";

export default combineReducers({
  basketState: basketReducer,
  gaState: gaReducer,
  vipState: vipReducer,
});
