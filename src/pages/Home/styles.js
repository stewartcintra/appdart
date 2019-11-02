import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    searchContainer: {
        marginTop: 15,
        marginBottom: 10,
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
        marginBottom: 10,
        borderRadius: 4,
    },
    cardContainer: {
        flex: 1,
        minHeight: 80,
        backgroundColor: '#F5F5f5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 6,
        elevation: 1
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    textDescription: {
        fontSize: 12,
        color: '#333'
    },
    button: {
        backgroundColor: '#0275d8',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff'
    },
    emptyList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row'
    },
    emptyText: {
        marginRight: 10, 
        fontSize: 18
    }
})

export default styles;