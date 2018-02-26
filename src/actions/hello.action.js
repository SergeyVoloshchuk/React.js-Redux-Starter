import {HELLO} from './../constants/actions.const'

export function setHelloMessage(msg) {

  return {
    type: HELLO,
    payload: {
      hello: msg
    }
  }

}
