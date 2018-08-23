//Reducerで使用する
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


//action creatorはviewを担当するcomponentに渡される
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}
