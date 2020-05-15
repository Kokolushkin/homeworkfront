import { combineReducers } from 'redux';
import accounts from './modules/reducers/accountsReducer';

const rootReducer = combineReducers({
    accounts,
});

export default rootReducer;