import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header()
{
    return(

        <View style={styles.container1}>
            <View style={styles.boxHeader}>
                <Text style={{fontsize: 25, textAlign: 'center', color: "white"}}>Lista de Imagens</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container1:
{
    flex: 1,
    backgroundColor: 'black',
    height: 50,
},

boxHeader:
{
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center'
},

})