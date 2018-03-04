import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {CHANGE_SOMETHING} from '../Actions/FirstPageActions';
class FirstPage extends PureComponent {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '页面1',
        //drawerLabel:'页面1'
    };
    // componentWillUpdate(){
    //     alert(this.props.status);
    // }
    // componentDidUpdate(){
    //     alert(this.props.status);
    // }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.dispatch(CHANGE_SOMETHING());
                    }}
                >
                    <Text style={styles.welcome}>
                        {this.props.status == 'CHANGE_SOMETHING' ? 'You touched me!' : 'This is First Page!'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});
const mapStateToProps = (store)=>({
    status: store.FirstPageReducer.status
});
export default connect(mapStateToProps)(FirstPage);

