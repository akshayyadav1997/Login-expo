import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';

//
// var config = {
//     apiKey: "AIzaSyCFO8yZNMOl80GSa7mKpAvYtf4IBc2wQFc",
//     authDomain: "login-11519.firebaseapp.com",
//     databaseURL: "https://login-11519.firebaseio.com",
//     projectId: "login-11519",
//     storageBucket: "",
//     messagingSenderId: "520734790523"
// };
// firebase.initializeApp(config);


export default class Logo extends React.Component{


        state = {
            email: '',
            password: ''
        };



    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           onChangeText={(email) => this.setState({email})}
                           placeholderTextColor = "#ffffff"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           onChangeText={(password) => this.setState({password})}
                           secureTextEntry={true}
                           placeholderTextColor = "#ffffff"
                           ref={(input) => this.password = input}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },


});