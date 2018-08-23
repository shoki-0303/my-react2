=== React ===
・reactはコンポーネントの内部で状態を持つことができる
=> state

・propは親のコンポーネントから属性を渡される。imutable
・stateはコンポーネントの内部でのみしようされる。mutable
・stateはクラスコンポーネントで使用できる機能

stateを変更する場合は必ずsetStateを使用する

=== Redux ===

--action--
・actionはtypeとtypeに対応するユニークなkeyをもつ
・カウントアプリケーションはincrementとdecrementというアクションを持つ
・Reduxではアクションを返す関数をaction creatorという

--reducer--
・actionが発生した時に、actionに組み込まれているtypeに応じて状態をどう変化させるのかを定義する。（状態=state）
・reducers/index.jsはreducer内の全てのreducerを総括する
・combineしたReducerはstoreでも使用するため、exportしておく

・reducerではアクションをimportして使えるようにする
・初期状態を定義しておく

=== Store ===
・reducerを元にstoreを作成
・storeが全てのコンポーネントで使用できるようにする
・createStoreの引数にreducerを渡す
・アプリケーション内で使用される全てのstateが集約される
・providerを使用することでstoreがどのcomponentからも参照可能になる

=== connect関数 ===









