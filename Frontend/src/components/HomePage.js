import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    AppRegistry,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    Image
} from 'react-native';
// import HomePage from './components/HomePage';

export default function app() {
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="yellow" hidden={false} backgroundColor="blue" translucent={true} /> */}
            <View style={styles.nav}>
                <TouchableHighlight style={styles.manu}>
                    <View>
                        <Text>MANU</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.detail}>
                    <Text>DETAIL</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.board}>
                <View>
                    <Text>DASHBOARD</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.finance}>
                    <Text>FINANCE</Text>
                </View>
                <View>
                    <Text style={styles.inventory}>INVENTORY</Text>
                </View>
            </View>

            <View style={styles.update}>
                <Text style={styles.text}>UPDATE</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    nav: {
        flex: 0.7,
        flexDirection: 'row',
        backgroundColor: "#ad2525",
        justifyContent: 'center',
        alignItems: 'center'
    },
    manu: {
        flex: 1,
        height: 90,
        alignItems: 'flex-start',
        paddingLeft: 15,
        justifyContent: 'center'
    },
    detail: {
        flex: 1,
        justifyContent: 'center',
        height: 90,
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    board: {
        backgroundColor: 'green',
        flex: 2,
        justifyContent: 'center',
        margin: 8,
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'gray',
        margin: 8,
        flex: 3,
        alignItems: 'center'
    },
    update: {
        backgroundColor: 'black',
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }

})
