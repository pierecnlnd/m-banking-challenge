import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Users from '../../data/users.json';

const users = Users["users"];

function checkCredentials(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            return true;
        }
        return false;
    }
}

const SignInScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        const check = checkCredentials(username, password)
        if (check) {
            navigation.navigate('Dashboard');
        }
        else {
            console.error('Your username and password not matched');
        }
    };

    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height *0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
                placeholder={'Username'}
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder={'Password'}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text={'Sign In'} onPress={onSignInPressed} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 200,
    },
});

export default SignInScreen;