import { accountsSagas } from './modules/sagas/accountsSagas';
import { all } from 'redux-saga/effects';

function* rootSaga(){
    yield all([
        accountsSagas(),
    ]);
}

export default rootSaga;