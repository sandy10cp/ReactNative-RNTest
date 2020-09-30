import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { colors } from '../utils'

const screenWidth = Dimensions.get('window').width;

const data = [
    {
        id: 1,
        nama: 'Item Barang 1',
        qty: 100,
        exp: '10-12-2020',
        harga: '20.000'
    },
    {
        id: 2,
        nama: 'Item Barang 2',
        qty: 100,
        exp: '10-12-2020',
        harga: '12.000'
    },
    {
        id: 3,
        nama: 'Item Barang 3',
        qty: 100,
        exp: '10-12-2020',
        harga: '25.000'
    },
    {
        id: 4,
        nama: 'Item Barang 4',
        qty: 100,
        exp: '10-12-2020',
        harga: '30.000'
    },
]
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>LIST BARANG</Text>
            </View>
            <View style={styles.wrapperList}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={styles.item}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.nama}</Text>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rp {item.harga}</Text>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Qty {item.qty}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' }}>{item.exp}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.defaultBackGround
    },
    wrapperList: {
        width: '100%',
        height: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        height: 120,
        width: screenWidth / 2 - 20,
        backgroundColor: 'white',
        borderRadius: 7,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
