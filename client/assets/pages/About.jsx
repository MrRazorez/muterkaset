import React from 'react';
import { View } from 'react-native';
import * as Bulma from '@jrobins/bulma-native';

export const About = () => {
    return (
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
        <Bulma.Message header="About" isOpen color='link'>
            <Bulma.Text>
                MuterKaset Mobile by GHOST
            </Bulma.Text>
        </Bulma.Message>
        </View>
    )
}