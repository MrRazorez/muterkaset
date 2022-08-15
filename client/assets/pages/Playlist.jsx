import React from 'react';
import { View } from 'react-native';
import * as Bulma from '@jrobins/bulma-native';

export const List = ({navigation}) => {
    return (
        <View style={{}}>
            <Bulma.Box
                onTouchStart={() => navigation.navigate('Media')}
                style={{
                    margin: 20,
                    backgroundColor: 'dodgerblue',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Bulma.Text style={{
                    color: '#FFFFFF',
                    flex: 1
                }}>
                    Artis - Judul
                </Bulma.Text>
            </Bulma.Box>
        </View>
    )
}