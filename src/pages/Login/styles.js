import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF"
    },
    input: {
        fontSize: 16,
        fontWeight: 'bold',
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginBottom: 20,
        borderRadius: 4
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 3
    },
    button: {
        height: 50,
        elevation: 2,
        borderRadius: 4,
        backgroundColor: '#0275d8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
  },
})

export default styles;
