import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import { Text } from 'react-native';

import banner from '../../assets/img/banner.png'
import Button from '../../components/Button'

export default function Home(navigation) {
  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que engregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={()=>{navigation.navigate('Main')}} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}