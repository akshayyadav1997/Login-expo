import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';



import Routes from './src/Routes';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCFO8yZNMOl80GSa7mKpAvYtf4IBc2wQFc",
    authDomain: "login-11519.firebaseapp.com",
    databaseURL: "https://login-11519.firebaseio.com",
    projectId: "login-11519",
    storageBucket: "login-11519.appspot.com",
    messagingSenderId: "520734790523"
};



export default class App extends React.Component {

    componentWillMount(){

        firebase.initializeApp(config);

    }

    render() {
        return (
            <View style={styles.container}>
                <Routes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
});
