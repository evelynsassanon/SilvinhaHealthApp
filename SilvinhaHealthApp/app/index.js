import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const menuData = [
{
id: '1',
title: 'Calculadora de IMC',
route: '/imc',
color: '#FF6B6B',
icon: '📊'
},
{
id: '2',
title: 'Peso Ideal',
route: '/peso-ideal',
color: '#4ECDC4',
icon: '⚖️'
},
{
id: '3',
title: 'Água Diária',
route: '/agua',
color: '#45B7D1',
icon: '💧'
},
{
id: '4',
title: 'Taxa Metabólica',
route: '/tmb',
color: '#96CEB4',
icon: '🔥'
},
];



export default function HomeScreen() {
    return (
        <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})