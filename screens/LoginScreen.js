import React from 'react'
import {Text,View,TextInput, TouchableOpacity,Alert,FlatList, StyleSheet,KeyboardAvoidingView,Image} from 'react-native'
import firebase from 'firebase';

export default class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    login=async(email, password)=>{
        if(email && password){
            try{
                const response= await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
             this.props.navigation.navigate('WriteStoryScreen')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert("User doesn't exist")
                        console.log('Doesnt exist')
                        break;
                    case  'auth/invalid-email':
                        Alert.alert('incorrect mail addrees or password')
                        console.log('invalid')
                        break;
                }
            }
        }
    }

    render(){

        return(

            <KeyboardAvoidingView>
                <View> 
                <Image
                source={require("../assets/icon.png")}
                syle={{width: 200, height: 200}}
                />
                <Text style={{fontSize: 30, textAlign: 'center'}}>Wily</Text>
                </View>
                <View>
                <TextInput
                    styles={styles.loginBox}
                    placeholder="ABC@Example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}
                />
                <TextInput
                    styles={styles.loginBox}
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                />
                </View>

<View>
<TouchableOpacity 
style={{width:90,
height:30,
borderWidth:1,
marginTop:20,
borderRadius:7
}}
onPress={()=>{
    this.login(this.state.email, this.state.password)}
    }>
                    <Text>Login</Text>
</TouchableOpacity>
</View>
            

            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10
    }

})