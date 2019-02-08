import { put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas');
}

// worker saga
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
  console.log('+1');
}

// watcher saga
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  console.log('wut');
}

// rootSaga
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
