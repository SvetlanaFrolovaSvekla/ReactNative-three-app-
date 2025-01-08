import {View, Text, Button} from 'react-native';
import {gStyle} from '@/styles/style';
import React from 'react';

export default function Contacts({navigation}) {
    /*
        const loadScene = () => {
            navigation.goBack();
        }
    */
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>О нас</Text>
            {/*<Button title='Вернуться на главную' onPress={loadScene}/>*/}
        </View>
    );
}

