import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import {connect} from 'react-redux';
import {
    TabNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import {addListener} from '../store';
class NavigatorPages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}
            />
        )
    }
}
export const SimpleAppNavigator = TabNavigator({
    page1: {screen: FirstPage},
    page2: {screen: SecondPage},
    page3: {screen: ThirdPage},
    page4: {screen: FourthPage}
},{
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition:'bottom',
});
const mapStateToProps = (store)=>({
    nav : store.TabNavigatorReducer,
});
export default connect(mapStateToProps)(NavigatorPages);