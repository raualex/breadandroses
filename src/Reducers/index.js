import { combineReducers } from "redux";
import { senateCommittee, isLoading, hasErrored } from "./senate-reducers";

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  senateMembers: senateCommittee
});

export default rootReducer;
