import {SimpleAppNavigator} from '../AllPages/TabNavigatorPage';
export  default (state,action)=>{
    //获取并返回新的state
    var newState = SimpleAppNavigator.router.getStateForAction(action,state) ;
    return newState || state;
}