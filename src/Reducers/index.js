import { combineReducers } from "redux";
import { senateCommittee, senateHearings, isLoading, hasErrored } from "./senate-reducers";
import { houseCommittee, houseHearings } from "./house-reducers";

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  senateMembers: senateCommittee,
  houseMembers: houseCommittee,
  senateHearings: senateHearings,
  houseHearings: houseHearings
});

export default rootReducer;
