import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class Login extends React.Component {




    state = {
            email: '',
            password: '',
        };





    LoginUser(email, password){

        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log(user)
                
            })

        }
        catch(error){
            console.log(error.toString())
        }

    }

    signup() {
        Actions.signup()
    }



    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form/>
                <TouchableOpacity style={styles.button} onPress={this.LoginUser(this.state.email,this.state.password)} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>New User?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },

    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});
