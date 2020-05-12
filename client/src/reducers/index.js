import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import visit from "./visit";

export default combineReducers({
  alert,
  auth,
  profile,
  visit
});
