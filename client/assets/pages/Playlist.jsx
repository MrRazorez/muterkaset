import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const List = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Playlist
            </Text>
            <Button
                title='Media Player'
                onPress={() => navigation.navigate('Media')}
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