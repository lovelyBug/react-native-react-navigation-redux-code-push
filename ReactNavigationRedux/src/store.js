/**
 * Created by sxy on 2017/7/8.
 */
import {createStore,applyMiddleware} from 'redux';
//中间件
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

//reducers
import reducers from './Allreducer/index';
//引用react-navigation-redux-helpers组件手动创建中间件,接受state并返回新的state,让路由刷新
// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
    "App",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("App");
const middleWares = [middleware,thunk,logger];
export default applyMiddleware(...middleWares)(createStore)(reducers);
