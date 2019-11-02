import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('dart@dart.com.br');
    const [senha, setSenha] = useState('123456');

    const [isLoading, setIsLoading] = useState(false);

    function handleLogin() {
        setIsLoading(true);

        if (!email.includes('@') || !email.includes('.')) {
            setIsLoading(false);
            return Alert.alert('Erro', 'Informe um email válido');
        }

        if (senha.length < 6) {
            setIsLoading(false);
            return Alert.alert('Erro', 'Senha deve ter no mínimo 6 digitos.');
        }

        if (email !== 'dart@dart.com.br' || senha !== '123456') {
            setIsLoading(false);
            return Alert.alert('Erro', 'Email e/ou Senha incorretos!')
        }

        navigation.navigate('Home');

        setIsLoading(false);
    }

    return (
        <View style={styles.container}>

            <Icon name="github" color="#0275d8" size={80} />
            
            <Text style={styles.label}>Email:</Text>
            <TextInput autoFocus 
              autoCapitalize="none" 
              style={styles.input} 
              keyboardType="email-address" 
              value={email} 
              onChangeText={setEmail} 
              placeholder="seu email" 
            />
            
            <Text style={styles.label}>Senha:</Text>
            <TextInput 
              style={styles.input} 
              secureTextEntry 
              value={senha} 
              onChangeText={setSenha} 
              placeholder="sua senha" 
            />

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => handleLogin()}>
                
                { isLoading ? <ActivityIndicator size="large" color="#fff" /> 
                : <Text style={styles.buttonText}>ENTRAR</Text> }
            </TouchableOpacity>
        </View>
    );
}

Login.navigationOptions = {
    header: null,
}
