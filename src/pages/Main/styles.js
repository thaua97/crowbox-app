import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30,
        backgroundColor: '#333333' 
    },

    logo: {
        alignSelf: 'center'
    },  

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#111',
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 30
    },

    button: {
        height: 48,
        paddingHorizontal: 20,
        marginTop: 30,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})

export default styles