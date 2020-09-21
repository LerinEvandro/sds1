import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>
          <Header />
          <View style={styles.container}>
              <Image 
              source={require('../../assets/gamer.png')}
              style={styles.gamerImage}
              />
              <Text style={styles.title}>Vote agora!</Text>
              <Text style={styles.subTitle}>Nos diga qual é seu jogo favorito!</Text>
          </View>
          <View style={styles.footer}>
              <RectButton style={styles.button} onPress={handleOnPress}>
                  <Text style={styles.buttonText}>
                      COLETAR DADOS
                  </Text>
                  <View style={styles.buttonIcon}>
                      <Text>
                          <Icon name="chevron-right" color="#FFF" size={25}/>
                      </Text>
                  </View>
              </RectButton>
          </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
      marginTop:  '10%',
      backgroundColor: '#0B1F34',
      alignItems: 'center',
    },
    gamerImage: {
      width: 260,
      height: 245
    },
    title: {
      color: '#00D4FF',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 10,
      fontFamily: "Play_700Bold",
    },
    subTitle: {
      color: '#ED7947',
      fontSize: 18,
      marginTop: 10,
      fontFamily: "Play_400Regular",
    },
    footer: {
      marginTop: '10%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 20
    },
    buttonIcon: {
      backgroundColor: '#ED7947',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 20,
      color: '#0B1F34',
    }
  });

export default Home;