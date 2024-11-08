import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});

export default rootReducer;