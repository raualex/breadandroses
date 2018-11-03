import { combineReducers } from "redux";
import { senateCommittee, isLoading, hasErrored } from "./senate-reducers";
import { houseCommittee } from "./house-reducers";

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  senateMembers: senateCommittee,
  houseMembers: houseCommittee
});

export default rootReducer;
