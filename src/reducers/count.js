//acrionを受け取る
import { INCREMENT, DECREMENT } from '../actions'

const initialState = {value: 0}
//index.jsに渡すためにexport
//関数の内部で受け取ったaction.typeに応じてstateを変更
export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {value: state.value + 1}
    case DECREMENT:
      return {value: state.value - 1}
    default:
      return state
  }
}
