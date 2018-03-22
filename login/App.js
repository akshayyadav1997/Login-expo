import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';


const config = {
    apiKey: "AIzaSyCFO8yZNMOl80GSa7mKpAvYtf4IBc2wQFc",
    authDomain: "login-11519.firebaseapp.com",
    databaseURL: "https://login-11519.firebaseio.com",
    projectId: "login-11519",
    storageBucket: "",
    messagingSenderId: "520734790523"
};




import Routes from './src/Routes';
import * as firebase from "firebase";

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