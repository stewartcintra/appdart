import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, Linking, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import api from '../../services/api';

export default function Home() {

    const [search, setSearch] = useState('');

    const [repositorios, setRepositorios] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        loadRepositorios();
    }, []);

    useEffect(() => {
        if (search.length >= 3) {
            ToastAndroid.show('buscando...', ToastAndroid.SHORT);

            let repositorio = repositorios.filter((item) => {
                return item.name === search;
            })

            setRepositorios(repositorio)
        }
    }, [search]);

    async function loadRepositorios() {
        setRefresh(true);

        const response = await api.get('/repositories');

        setRepositorios(response.data);

        setRefresh(false);
    }

    function onRefresh() {
        loadRepositorios();
    }

    function handleUrl(url) {
        Linking.openURL(url)
        .catch((err) => console.error('An error occurred', err));
    }

    function emptyList() {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyText}>Nada Encontrado</Text>
                <Icon name="frown-o" color="#000" size={25} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>
                <TextInput 
                    autoCapitalize="none"
                    style={styles.input} 
                    value={search}
                    onChangeText={setSearch} 
                    placeholder="buscar respositorios"
                />
            </View>

            <FlatList
                style={styles.flatList}
                data={repositorios}
                keyExtractor={item => item.id.toString()}
                onRefresh={() => onRefresh()}
                refreshing={refresh}
                renderItem={({ item }) => (

                  <View style={styles.cardContainer}>

                      <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.textDescription}>{item.description}</Text>

                      <TouchableOpacity style={styles.button} onPress={() => handleUrl(item.html_url)}>
                          <Text style={styles.buttonText}>Acessar Repositório</Text>
                      </TouchableOpacity>
                  </View>
              )}
              ListEmptyComponent={!refresh && emptyList()}
            />

        </View>
    );
}

Home.navigationOptions = {
    title: 'Repositórios',
}