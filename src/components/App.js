import React, {Component} from 'react';
import {connect} from 'react-redux'

import {increment, decrement} from '../actions'

class App extends Component {

  render () {
    const props = this.props
    console.log(this.props.increment)
    return(
      <React.Fragment>
        <div>value: {props.count.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
      );
  }
}

//mapStateToPropsはstateの情報から必要なものを取り出してpropsに渡す
//トップレベルstate->count.js(reducer)
const mapStateToProps = state => ({count: state.count})

//あるアクションが発生した時にreducerにタイプに応じたstate変化を実行させる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement})

//stateとactionをコンポーネントに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)
