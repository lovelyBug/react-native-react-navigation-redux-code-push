import { combineReducers } from 'redux';
import TabNavigatorReducer from './TabNavigatorReducer';
import FirstPageReducer from './FirstPageReducer';
const reducers = combineReducers({
    TabNavigatorReducer,
    FirstPageReducer,
});
export default  reducers;