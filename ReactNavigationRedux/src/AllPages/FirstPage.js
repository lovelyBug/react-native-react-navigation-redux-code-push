import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {CHANGE_SOMETHING} from '../Actions/FirstPageActions';
import codePush from 'react-native-code-push';
class FirstPage extends PureComponent {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '页面1',
        //drawerLabel:'页面1'
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        //this.props.dispatch(CHANGE_SOMETHING());
                        codePush.sync({
                            updateDialog: {
                                appendReleaseDescription: true,
                                descriptionPrefix:'\n\n更新内容：\n',
                                title:'更新',
                                mandatoryUpdateMessage:'',
                                mandatoryContinueButtonLabel:'更新',
                            },
                            mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
                            //deploymentKey: '',
                        });
                    }}
                >
                    <Text style={styles.welcome}>
                        {this.props.status == 'CHANGE_SOMETHING' ? 'You touched me!' : 'This is First Page!'}
                    </Text>
                    <Image source={require('../images/battery-2.png')} />
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

