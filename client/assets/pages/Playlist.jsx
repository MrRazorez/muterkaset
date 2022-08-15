import React from 'react';
import { ScrollView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as axios from 'axios';
import * as Bulma from '@jrobins/bulma-native';
import { download } from '../components/sliceVideo';

const Item = ({pointer, title}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <Bulma.Button
            onPress={() => {
                dispatch(download(pointer));
                navigation.navigate('Media');
            }}
            style={{
                margin: 20,
                backgroundColor: 'dodgerblue',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Bulma.Text style={{
                color: '#FFFFFF',
                flex: 1,
                fontSize: 20
            }}>
                {title}
            </Bulma.Text>
        </Bulma.Button>
    )
}

export const List = () => {
    const [dataAPI, setDataAPI] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get('urlHost/list');
            setDataAPI(res.data.data);
        }catch{
            setDataAPI([{
                data: 'Server Down'
            }]);
        }
    }

    useEffect(() => {getData()}, []);

    return (
        <View>
            <ScrollView>
                {
                    dataAPI.map(item => (
                        <View key={item.id}>
                            <Item pointer={item.id} title={item.judul}/>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}