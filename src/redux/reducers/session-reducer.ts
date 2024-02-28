import { ActionType, AdminType, UserType } from "../../utils/types";

const initialState: SessionsReducerType = {
  userInfo: null
};

const sessionReducer = ( state = initialState, action: ActionType ): SessionsReducerType => {
  switch (action.type) {
    case 'STORE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      }
    default:
      return state;
  }
};

export default sessionReducer;

type SessionsReducerType = {
  userInfo: ( UserType & AdminType ) | null,
};