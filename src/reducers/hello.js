import {HELLO} from './../constants/actions.const'
const initialState = {
    hello: 'Hello World from REDUX'
}

export default function hello(state = initialState, action) {
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}