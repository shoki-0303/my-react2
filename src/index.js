import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux' //createStoreを使える
import { Provider } from 'react-redux' //全コンポーネントでstore使用
import './index.css';
import reducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//アプリケーション内で唯一のstoreになる
const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

//storeがどのcomponentからも参照できるように<Provider>でwrap
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
