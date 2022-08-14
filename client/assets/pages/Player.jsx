import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Player = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Media Player
            </Text>
            <Button
                title='Back'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });